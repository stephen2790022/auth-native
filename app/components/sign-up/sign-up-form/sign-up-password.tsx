import { Fragment } from "react";
import { Control, Controller } from "react-hook-form";
import { styles } from "../sign-up.styles";
import { ScrollView } from "react-native";
import { TextInput, Text, HelperText } from "react-native-paper";
import { View } from "react-native";
import { SignUpFormData } from "../sign-up.view";

type SignUpInfosFormProps = {
  control: Control<SignUpFormData, any>;
};

export default function SignUpPasswordForm({ control }: SignUpInfosFormProps) {
  return (
    <Fragment>
      <ScrollView style={{ gap: 10 }}>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View style={styles.inputWrapper}>
              <Text style={styles.inputTitle}>Password</Text>
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
          name="password_confirmation"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View style={styles.inputWrapper}>
              <Text style={styles.inputTitle}>Password Cconfirmation</Text>
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
      </ScrollView>
    </Fragment>
  );
}
