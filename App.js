import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import * as Font from "expo-font";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Trap-Regular": require("./assets/fonts/Trap-Regular.otf"),
        "Trap-Bold": require("./assets/fonts/Trap-Bold.otf"),
        "Trap-Medium": require("./assets/fonts/Trap-Medium.otf"),
        "Trap-Light": require("./assets/fonts/Trap-Light.otf"),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // You can also return a loading indicator here
  }

  return <Navigation />;
}
