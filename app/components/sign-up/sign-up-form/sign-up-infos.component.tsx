import { Fragment, useState } from "react";
import { Control, Controller } from "react-hook-form";
import { styles } from "../sign-up.styles";
import { ScrollView } from "react-native";
import {
  TextInput,
  Text,
  HelperText,
  PaperProvider,
  useTheme,
} from "react-native-paper";
import dayjs from "dayjs";
import { View } from "react-native";
import { DatePickerInput, DatePickerModal } from "react-native-paper-dates";
import { Dropdown } from "react-native-paper-dropdown";
import { SignUpFormData } from "../sign-up.view";

type SignUpInfosFormProps = {
  control: Control<SignUpFormData, any>;
};

const CustomDatePicker = ({ value, onChange }: any) => {
  const [visible, setVisible] = useState(false);
  const [customDate, setCustomDate] = useState();
  const theme = useTheme();

  const openDatePicker = () => setVisible(true);
  const closeDatePicker = () => setVisible(false);

  const onConfirm = (date: any) => {
    onChange(dayjs(date.date).format("DD/MM/YYYY"));
    setCustomDate(date.date);
    closeDatePicker();
  };
  console.log(value);
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        mode="flat"
        value={value}
        onPress={openDatePicker}
        editable={false}
        style={styles.input}
        right={<TextInput.Icon onPress={openDatePicker} icon="calendar" />}
      />

      <DatePickerModal
        locale="en"
        mode="single"
        visible={visible}
        onDismiss={closeDatePicker}
        date={customDate || new Date()}
        onConfirm={onConfirm}
        animationType="fade"
        validRange={{
          startDate: undefined, // Allows all past dates
          endDate: new Date(), // Optional: restricts to today and earlier
        }}
      />
    </View>
  );
};

export default function SignUpInfosForm({ control }: SignUpInfosFormProps) {
  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const nationalityOptions = [
    { label: "American", value: "american" },
    { label: "British", value: "british" },
    { label: "Canadian", value: "canadian" },
    { label: "French", value: "french" },
    { label: "German", value: "german" },
    { label: "Indian", value: "indian" },
    { label: "Japanese", value: "japanese" },
    { label: "Other", value: "other" },
    // Add more options here
  ];

  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState(null);
  return (
    <Fragment>
      <ScrollView>
        <View style={{ gap: 20 }}>
          <Controller
            control={control}
            name="first_name"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <View style={styles.inputWrapper}>
                <Text style={styles.inputTitle}>First Name</Text>
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  mode="flat"
                  underlineColor="#000000"
                  activeUnderlineColor="#000000"
                  style={styles.input}
                  error={!!error}
                />
                {error && (
                  <HelperText type="error" visible={!!error}>
                    {error.message}
                  </HelperText>
                )}
              </View>
            )}
          />
          <Controller
            control={control}
            name="last_name"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <View style={styles.inputWrapper}>
                <Text style={styles.inputTitle}>Last Name</Text>
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  mode="flat"
                  underlineColor="#000000" // Black when inactive
                  activeUnderlineColor="#000000" // Black when active
                  style={styles.input}
                  error={!!error}
                />
                {error && (
                  <HelperText type="error" visible={!!error}>
                    {error.message}
                  </HelperText>
                )}
              </View>
            )}
          />
          <Controller
            control={control}
            name="user_name"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <View style={styles.inputWrapper}>
                <Text style={styles.inputTitle}>User Name</Text>
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  mode="flat"
                  underlineColor="#000000"
                  activeUnderlineColor="#000000"
                  style={styles.input}
                  left={<TextInput.Icon icon="at" />}
                  error={!!error}
                />
                {error && (
                  <HelperText type="error" visible={!!error}>
                    {error.message}
                  </HelperText>
                )}
              </View>
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <View style={styles.inputWrapper}>
                <Text style={styles.inputTitle}>Email</Text>
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  mode="flat"
                  underlineColor="#000000"
                  activeUnderlineColor="#000000"
                  style={styles.input}
                  error={!!error}
                />
                {error && (
                  <HelperText type="error" visible={!!error}>
                    {error.message}
                  </HelperText>
                )}
              </View>
            )}
          />
          <Controller
            control={control}
            name="date_of_birth"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <View style={styles.inputWrapper}>
                <Text style={styles.inputTitle}>Date of Birth</Text>
                <CustomDatePicker value={value} onChange={onChange} />
                {error && (
                  <HelperText type="error" visible={!!error}>
                    {error.message}
                  </HelperText>
                )}
              </View>
            )}
          />
        </View>
      </ScrollView>
    </Fragment>
  );
}
