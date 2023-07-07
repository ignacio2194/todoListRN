import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Task = (props) => {
    return (
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square}></View>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <TouchableOpacity
          style={styles.circular}
          onPress={() => props.completeTask(props.index)}
        >
          <Ionicons name="trash-outline" size={24} color="red" />
        </TouchableOpacity>
      </View>
    );
  };
  

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
//   square: {
//     height: 24,
//     width: 24,
//     backgroundColor: "#55b6f6",
//     opacity: 0.5,
//     borderRadius: 5,
//     marginRight: 15,
//   },
  itemText: {
    maxWidth: "80%",
  },
//   circular: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 2,
//     borderColor: "#58b8f6",
//   },
});

export default Task;
