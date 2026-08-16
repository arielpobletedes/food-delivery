// TODO: implementar para web
import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";

export const storage = {
  // Guardar un valor
  setItem: async (key: string, value: string): Promise<void> => {
    if (Platform.OS === "web") {
      try {
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, value);
        }
      } catch (e) {
        console.error("Error guardando en localStorage:", e);
      }
    } else {
      await SecureStore.setItemAsync(key, value);
    }
  },

  // Obtener un valor
  getItem: async (key: string): Promise<string | null> => {
    if (Platform.OS === "web") {
      try {
        if (typeof window !== "undefined") {
          return window.localStorage.getItem(key);
        }
        return null;
      } catch (e) {
        console.error("Error leyendo de localStorage:", e);
        return null;
      }
    } else {
      return await SecureStore.getItemAsync(key);
    }
  },

  // Eliminar un valor (el método que te causaba el error)
  deleteItem: async (key: string): Promise<void> => {
    if (Platform.OS === "web") {
      try {
        if (typeof window !== "undefined") {
          window.localStorage.removeItem(key);
        }
      } catch (e) {
        console.error("Error eliminando de localStorage:", e);
      }
    } else {
      await SecureStore.deleteItemAsync(key);
    }
  },
};
