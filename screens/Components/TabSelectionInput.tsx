import { View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Color } from "../../typography/Styles";

export interface Tab {
    name: string,
    value: number,
}
interface TabSelectionProps {
    label?: string
    onChange(value: Tab): void,
    defaultValue: Tab,
    tabs: Tab[],
    bottomSpace?: boolean,
}

const TabSelectionInput = (props: TabSelectionProps) => {
    let styleArr: any[] = [styles.inputContainer];
    if (props.bottomSpace)
        styleArr.push(styles.blank)


    return (
        <View style={styleArr}>
         {props.label ?   <Text style={styles.label}>{props.label}</Text>:<></>}
            <View style={styles.tabs}>
                {
                    props.tabs.map((t) => {
                        return (
                            <TouchableOpacity
                                style={[
                                    styles.tab,
                                    props.defaultValue.value === t.value && styles.selectedTab,
                                ]}
                                onPress={() => props.onChange(t)}>
                                <Text style={[styles.tabTitle, props.defaultValue.value ===t.value   && styles.selectedTabTitle]}>{t.name}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
                    </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        // borderBottomColor: '#f2f2f2',
        // borderBottomWidth: 1,
        // padding: 5,
        marginTop:8,
        margin:13,
        borderRadius:15,
        borderWidth:1,
        borderColor:Color.white,
        shadowColor:"#000",
        shadowOffset: { width:0, height:2 }, shadowOpacity:0.25, shadowRadius:3.84, elevation:10
    },

    label: {
        flex: 0.5,
        textAlign: 'left',
    },
    blank: {
        marginBottom: 20,
    },
    tabs: {
        flex:1,
        alignItems:'flex-end',
        flexDirection: 'row',
        // borderColor: Color.white,
        // borderWidth: 1,
        width: '60%',
        alignSelf: 'center'
    },
    tab: {
        backgroundColor: '#fff',
        paddingStart: 5,
        paddingEnd: 5,
        paddingTop: 15,
        paddingBottom:15,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexShrink: 1,
        borderRadius:15,
    },
    selectedTab: {
        backgroundColor: Color.red,
    },
    selectedTabTitle: {
        color: "#fff"
    },
    tabTitle: {
        color: '#344955',
        fontSize: 15,
        fontWeight:"700"
    },
});


export default TabSelectionInput;