import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerTitleAlign: "center" }}>
    <Stack.Screen name="index" options={{ title: "Home" }} />
    <Stack.Screen name="details" options={{
      title: "Details", headerBackButtonDisplayMode: "minimal", presentation: "modal", sheetAllowedDetents: [0.3, 0.5, 0.7], sheetGrabberVisible: true,
    }} />
  </Stack>;
}
