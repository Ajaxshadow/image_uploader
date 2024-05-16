import { Image, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { BlurView, VibrancyView } from "@react-native-community/blur";
import ProgressBar from "./ProgressBar";

export function Uploading({ image, progress }) {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        },
      ]}
    >
      <VibrancyView
        blurType="ultraThinMaterialDark"
        style={StyleSheet.absoluteFill}
      ></VibrancyView>
      <BlurView
        style={{
          width: "70%",
          alignItems: "center",
          paddingVertical: 16,
          rowGap: 12,
          borderRadius: 14,
        }}
        blurType="light"
      >
        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
              borderRadius: 6,
            }}
          />
        )}
        <Text style={{ fontSize: 12 }}>Uploading...</Text>
        <ProgressBar progress={progress} />
        <View
          style={{
            height: 1,
            borderWidth: StyleSheet.hairlineWidth,
            width: "100%",
            borderColor: "#00000020",
          }}
        />
        <TouchableOpacity>
          <Text style={{ fontWeight: "500", color: "#3478F6", fontSize: 17 }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </BlurView>
    </View>
  );
}