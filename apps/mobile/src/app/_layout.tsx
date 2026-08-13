import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as SplashScreen from "expo-splash-screen";
import { AnimatedSplashOverlay } from "@/components/animated-icon";
import AppTabs from "@/components/app-tabs";

const queryCLient = new QueryClient();

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  return (
    <QueryClientProvider client={queryCLient}>
      <AnimatedSplashOverlay />
      <AppTabs />
    </QueryClientProvider>
  );
}
