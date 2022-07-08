import {CalendarList} from 'react-native-calendars';
import { StyleSheet, View} from 'react-native';



export default function Calendars({ navigation }) {
    return (
        <View style={styles.center}>
            <CalendarList
                onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
                pastScrollRange={50}
                futureScrollRange={50}
                scrollEnabled={true}
                showScrollIndicator={true}
                markingType={'custom'}
                markedDates={{
                    '2018-03-28': {
                        customStyles: {
                            container: {
                                backgroundColor: 'green'
                            },
                            text: {
                                color: 'black',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    '2018-03-29': {
                        customStyles: {
                            container: {
                                backgroundColor: 'white',
                                elevation: 3
                            },
                            text: {
                                color: 'blue'
                            }
                        }
                    }
                }}

            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },
});