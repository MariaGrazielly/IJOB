import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  btn:{
  width: '100%', 
  height: 40,
  borderRadius: 4,
  marginBottom: 10,
  },
  title_btn:{
    fontSize: 17,
  }, 
  container_btn:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  linha:{
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  linha_1:{
    width: "40%",
    borderTopWidth: 1,

  },
  linha_2:{
    width: "40%",
    borderTopWidth: 1,
  }
});