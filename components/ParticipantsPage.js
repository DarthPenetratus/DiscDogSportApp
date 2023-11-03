// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// import { collection, getDocs, deleteDoc, doc, setDoc, arrayUnion, arrayRemove, getDoc, addDoc } from 'firebase/firestore';
// import { db } from '../database/firebaseConfig';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const ParticipantsPage = () => {
//   const [participants, setParticipants] = useState([]);
//   const [name, setName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [dog, setDog] = useState('');

//   const fetchParticipants = async () => {
//     try {
//       const participantsRef = doc(db, 'New_game', 'participants');
//       const docSnapshot = await getDoc(participantsRef);
//       if (docSnapshot.exists()) {
//         const data = docSnapshot.data();
//         if (data.names) {
//           setParticipants(data.names);
//         } else {
//           setParticipants([]);
//         }
//       } else {
//         setParticipants([]);
//       }
//     } catch (error) {
//       console.error('Ошибка при получении данных: ', error);
//     }
//   };

//   useEffect(() => {
//     fetchParticipants();
//   }, []);

//   const handleDeleteParticipant = async (participantId) => {
//     try {
//       const participantsRef = doc(db, 'New_game', 'participants');
//       await setDoc(participantsRef, { names: arrayRemove(participantId) }, { merge: true });
//       fetchParticipants();
//     } catch (error) {
//       console.error('Ошибка при удалении участника: ', error);
//     }
//   };

//   const addParticipant = async () => {
//     if (name && lastName && dog) {
//       try {
//         const participantsRef = doc(db, 'New_game', 'participants');
//         const fullName = `${name} ${lastName}`;
//         const fullNameWithDog = `${fullName}, Dog: ${dog}`;

//         await setDoc(participantsRef, { names: arrayUnion(fullNameWithDog) }, { merge: true });

//         const participantCollectionRef = collection(participantsRef, fullName);

//         await addDoc(participantCollectionRef, {});

//         console.log(`Участник "${fullNameWithDog}" добавлен в базу данных`);

//         setName('');
//         setLastName('');
//         setDog('');
//         fetchParticipants();
//       } catch (error) {
//         console.error('Ошибка при добавлении участника: ', error);
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Enter participant name:</Text>
//         <TextInput
//           value={name}
//           onChangeText={setName}
//           placeholder="Enter here"
//           style={styles.input}
//           borderRadius={5}
//         />

//         <Text style={styles.label}>Enter participant last name:</Text>
//         <TextInput
//           value={lastName}
//           onChangeText={setLastName}
//           placeholder="Enter last name"
//           style={styles.input}
//           borderRadius={5}
//         />

//         <Text style={styles.label}>Enter dog name:</Text>
//         <TextInput
//           value={dog}
//           onChangeText={setDog}
//           placeholder="Enter dog name"
//           style={styles.input}
//           borderRadius={5}
//         />

//         <TouchableOpacity style={styles.addButton} onPress={addParticipant}>
//           <Text style={styles.addButtonText}>Add</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.separator}></View>

//       <View style={styles.listContainer}>
//         <Text style={styles.header}>List of participants:</Text>
//         <FlatList
//           data={participants}
//           keyExtractor={(item) => item}
//           renderItem={({ item }) => (
//             <View style={styles.row}>
//               <Text style={styles.cell}>{item}</Text>
//               <Icon
//                 name="times"
//                 size={20}
//                 color="#767676"
//                 style={styles.cell}
//                 onPress={() => handleDeleteParticipant(item)}
//               />
//             </View>
//           )}
//         />
//         <TouchableOpacity style={styles.updateButton} onPress={fetchParticipants}>
//           <Text style={styles.updateButtonText}>Update the list</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     padding: 20,
//   },
//   inputContainer: {
//     flex: 1,
//     marginRight: 10,
//   },
//   label: {
//     fontSize: 17,
//     fontWeight: 'bold',
//     color: '#434343',
//   },
//   input: {
//     height: 40,
//     borderColor: '#818181',
//     borderWidth: 1,
//     paddingLeft: 10,
//     borderRadius: 5,
//   },
//   addButton: {
//     backgroundColor: '#0CB2E6',
//     padding: 10,
//     alignItems: 'center',
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   addButtonText: {
//     color: 'white',
//   },
//   separator: {
//     padding: 40,
//   },
//   header: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#434343',
//   },
//   listContainer: {
//     flex: 2,
//     borderStyle: 'solid',
//     borderWidth: 1,
//     borderColor: '#818181',
//     padding: 10,
//     borderRadius: 5,
//   },
//   row: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderColor: '#818181',
//   },
//   cell: {
//     flex: 1,
//     padding: 8,
//   },
//   updateButton: {
//     backgroundColor: '#0CB2E6',
//     padding: 10,
//     alignItems: 'center',
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   updateButtonText: {
//     color: 'white',
//   },
// });

// export default ParticipantsPage;
import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { collection, getDocs, deleteDoc, doc, setDoc, arrayUnion, arrayRemove, getDoc, addDoc } from 'firebase/firestore';
import { db } from '../database/firebaseConfig';
import Icon from 'react-native-vector-icons/FontAwesome';

const ParticipantsPage = () => {
  const [participants, setParticipants] = useState([]);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dog, setDog] = useState('');
  const [breed, setBreed] = useState('');
  const [team, setTeam] = useState('');
  const [country, setCountry] = useState('');


  const fetchParticipants = async () => {
    try {
      const participantsRef = doc(db, 'New_game', 'participants');
      const docSnapshot = await getDoc(participantsRef);
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        if (data.names) {
          setParticipants(data.names);
        } else {
          setParticipants([]);
        }
      } else {
        setParticipants([]);
      }
    } catch (error) {
      console.error('Ошибка при получении данных: ', error);
    }
  };

  useEffect(() => {
    fetchParticipants();
  }, []);

  const handleDeleteParticipant = async (participantId) => {
    try {
      const participantsRef = doc(db, 'New_game', 'participants');
      await setDoc(participantsRef, { names: arrayRemove(participantId) }, { merge: true });
      fetchParticipants();
    } catch (error) {
      console.error('Ошибка при удалении участника: ', error);
    }
  };

  const addParticipant = async () => {
    if (name && lastName && dog && breed && team && country) {
      try {
        const fullName = `${name} ${lastName}`;
        const fullNameWithDog = `${fullName}, Dog: ${dog}, Breed: ${breed}, Team: ${team}, Country: ${country}`;

  
        const participantsRef = doc(db, 'New_game', 'participants');

      
  
        await setDoc(participantsRef, { names: arrayUnion(fullNameWithDog)}, { merge: true });
  
        const participantCollectionRef = collection(participantsRef, fullName);
  
        await addDoc(participantCollectionRef, {});



        const dogID = doc(db, 'New_game', 'participants', fullName, dog);
        await setDoc(dogID, { names: arrayUnion(fullName) });
      



  
        console.log(`Участник "${fullNameWithDog}" добавлен в базу данных`);
  
        setName('');
        setLastName('');
        setDog('');
        setBreed('');
        setTeam('');
        setCountry('');
        fetchParticipants();
      } catch (error) {
        console.error('Ошибка при добавлении участника: ', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter participant name:</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter here"
          style={styles.input}
          borderRadius={5}
        />

        <Text style={styles.label}>Enter participant last name:</Text>
        <TextInput
          value={lastName}
          onChangeText={setLastName}
          placeholder="Enter last name"
          style={styles.input}
          borderRadius={5}
        />

        <Text style={styles.label}>Enter dog name:</Text>
        <TextInput
          value={dog}
          onChangeText={setDog}
          placeholder="Enter dog name"
          style={styles.input}
          borderRadius={5}
        />

        <Text style={styles.label}>Enter dog breed:</Text>
        <TextInput
          value={breed}
          onChangeText={setBreed}
          placeholder="Enter dog breed"
          style={styles.input}
          borderRadius={5}
        />

        <Text style={styles.label}>Enter Team name:</Text>
        <TextInput
          value={team}
          onChangeText={setTeam}
          placeholder="Enter Team name"
          style={styles.input}
          borderRadius={5}
        />

        <Text style={styles.label}>Enter your country:</Text>
        <TextInput
          value={country}
          onChangeText={setCountry}
          placeholder="Enter country"
          style={styles.input}
          borderRadius={5}
        />

        <TouchableOpacity style={styles.addButton} onPress={addParticipant}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.separator}></View>

      <View style={styles.listContainer}>
        <Text style={styles.header}>List of participants:</Text>
        <FlatList
          data={participants}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.cell}>{item}</Text>
              <Icon
                name="times"
                size={20}
                color="#767676"
                style={styles.cell}
                onPress={() => handleDeleteParticipant(item)}
              />
            </View>
          )}
        />
        <TouchableOpacity style={styles.updateButton} onPress={fetchParticipants}>
          <Text style={styles.updateButtonText}>Update the list</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#434343',
  },
  input: {
    height: 40,
    borderColor: '#818181',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#0CB2E6',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  addButtonText: {
    color: 'white',
  },
  separator: {
    padding: 40,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#434343',
  },
  listContainer: {
    flex: 2,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#818181',
    padding: 10,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#818181',
  },
  cell: {
    flex: 1,
    padding: 8,
  },
  updateButton: {
    backgroundColor: '#0CB2E6',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  updateButtonText: {
    color: 'white',
  },
});

export default ParticipantsPage;
