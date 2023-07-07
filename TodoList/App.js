import React,{useState} from "react";
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Task from "./src/components/Task";
export default function App() {
  const [task,setTask]= useState()
  const [taskItems,setTaskItems]= useState([])
  const handleAddtask=()=>{
    if (task.trim() !== '') {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask('');
    }
  }
  const completeTask=(index)=>{
    let itemsCopy= [...taskItems]
    itemsCopy.splice(index,1)
    setTaskItems(itemsCopy)
  }
  return (
    <View style={styles.container}>
      <View style={styles.TaskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <View style={styles.items}>
       {taskItems.map((task,index)=>{
         return <Task key={index} text={task} index={index} completeTask={completeTask} />

          
         
       })}
        </View>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS==='android'? "height" : "padding"} style={styles.writeTaskWrapper} >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={(task)=>setTask(task)}/>
        <TouchableOpacity style={styles.addWrapper} onPress={()=>handleAddtask()}>
          <Text style={styles.AddText}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  TaskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop:30
  },
writeTaskWrapper:{
  position:'absolute',
  bottom:60,
  width:'100%',
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center'
},
input:{
  
  paddingVertical:15,
  paddingHorizontal:15,
  width:250,
backgroundColor:'#fff',
borderRadius:60,
borderColor:'#C0C0C0',
borderWidth:1,
width:250,

},
addWrapper:{
  width:60,
  height:60,
  backgroundColor:'#fff',
  borderRadius:60,
  justifyContent:'center',
  alignItems:'center',
  borderColor:'#C0C0C0',
  borderWidth:1,
},
AddText:{},
});
