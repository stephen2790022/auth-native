import { Fragment } from "react";
import { Control, Controller } from "react-hook-form";
import { styles } from "../login.style";
import { TextInput, Checkbox, Text, HelperText } from "react-native-paper";
import { View } from "react-native";
import { LoginFormData } from "@/app/logIn";

type LoginFormProps = {
  control: Control<LoginFormData, any>;
};

export const LoginForm = ({ control }: LoginFormProps) => {
  return (
    <Fragment>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <View style={styles.inputWrapper}>
            <Text style={styles.inputTitle}>Mail address</Text>
            <TextInput
              placeholder="Email"
              value={value}
              onChangeText={onChange}
              mode="outlined"
              style={styles.input}
              outlineColor="#E0E0E0"
              activeOutlineColor="#000000"
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
        name="password"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <View style={styles.inputWrapper}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              placeholder="Password"
              value={value}
              onChangeText={onChange}
              secureTextEntry
              mode="outlined"
              style={styles.input}
              outlineColor="#E0E0E0"
              activeOutlineColor="#000000"
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
        name="rememberMe"
        render={({ field: { onChange, value } }) => (
          <View style={styles.checkboxContainer}>
            <Checkbox.Android
              status={value ? "checked" : "unchecked"}
              onPress={() => onChange(!value)}
              color="#000000"
            />
            <Text>Remember me</Text>
          </View>
        )}
      />
    </Fragment>
  );
};
