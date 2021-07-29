import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingBottom:20
  },
  addressView: {
    backgroundColor: '#F0F4F7',
    width: '95%',
    height: 200,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'space-between',
  },
  alignViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentView: {
    backgroundColor: '#F0F4F7',
    width: '95%',
    height: 100,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'space-between',
  },
  headerView: {
    height: 39,
    alignItems: 'center',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#F0F4F7',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailView: {
    width: '100%',
  },
  itemView: {
    width: '100%',
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartView: {
    width: '100%',
    height: 45,
    backgroundColor: '#F0F4F7',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartItemStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartDetail: {
    height: 130,
    padding: 20,
    width: '100%',
    justifyContent: 'space-evenly',
  },
  textArea: {
    width: '92%',
    height: 120,
    borderRadius: 2,
    borderWidth: 0.1,
    borderColor: '#0B155A',
    marginBottom: 20,
    marginTop:20,
  },
  buttonView:{
    // position:'absolute',
    // bottom:0,
     width:'100%',
    marginBottom:10,
    marginTop:10
  }
});

export default styles;
