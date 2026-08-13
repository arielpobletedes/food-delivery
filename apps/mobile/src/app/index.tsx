import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { HealthCheckResponse } from "@food-delivery/types";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const {
    data: health,
    error,
    isLoading,
  } = useQuery<HealthCheckResponse>({
    queryKey: ["health"],
    queryFn: () =>
      api.get<HealthCheckResponse>("/health").then((res) => res.data),
  });

  return (
    <View>
      <Text>Food delivery</Text>
      <Text>Connection Text</Text>

      {isLoading && <ActivityIndicator size="large" color="ff6b35" />}

      {health && (
        <View>
          <Text>Api Status: {health.status}</Text>
          <Text>{new Date(health.timestamp).toLocaleDateString()}</Text>
        </View>
      )}

      {error && (
        <View>
          <Text>Could not reach the API. Is the server running?</Text>
        </View>
      )}
    </View>
  );
}
