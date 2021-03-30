import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function index({
  // METHODS
  setUsername,
  setEmail,
  setPassword,
  setPassword_,
  // PROPERTIES
  username,
  email,
  password,
  password_,
}) {
  return (
    <View>
      <View style={style.formContainer}>
        <View style={style.form}>
          <View>
            <View style={{ display: "flex" }}></View>
            <View>
              <Text
                style={{
                  color: "#cecece",
                  textAlign: "center",
                  fontSize: 14,
                  marginBottom: 12,
                }}
              >
                Register a Cryptonite account
              </Text>
            </View>
          </View>

          <View style={style.fieldset}>
            <View>
              <Text style={style.label}>
                Username <Text style={style.req}>*</Text>
              </Text>
              <TextInput
                onChangeText={(text) => setUsername(text)}
                placeholderTextColor={"grey"}
                placeholder="Enter username"
                style={style.input}
              />
            </View>
          </View>

          <View style={style.fieldset}>
            <View>
              <Text style={style.label}>
                Email <Text style={style.req}>*</Text>
              </Text>
              <TextInput
                onChangeText={(text) => setEmail(text)}
                placeholderStyle={style.input}
                placeholder="Enter email"
                placeholderTextColor={"grey"}
                style={style.input}
              />
            </View>
          </View>

          <View style={style.fieldset}>
            <View>
              <Text style={style.label}>
                Password <Text style={style.req}>*</Text>
              </Text>
              <TextInput
                onChangeText={(text) => setPassword(text)}
                placeholder="Enter password"
                placeholderStyle={style.input}
                placeholderTextColor={"grey"}
                style={style.input}
              />
            </View>
          </View>

          <View style={style.fieldset}>
            <View>
              <Text style={style.label}>
                Repeat Password
                <Text placeholder="Enter password" style={style.req}>
                  *
                </Text>
              </Text>
              <TextInput
                onChangeText={(text) => setPassword_(text)}
                placeholder="Enter password"
                placeholderTextColor={"grey"}
                style={style.input}
              />
            </View>
          </View>

          <View style={{ ...style.fieldset, marginTop: 10 }}>
            <View>
              <Text style={style.buttonText}>
                Already have an account?{" "}
                <TouchableOpacity>
                  <Text
                    style={{
                      ...style.buttonText,
                      marginTop: 3,
                      color: "#0079ff",
                    }}
                  >
                    Login.
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>

          <View style={style.fieldset}>
            <View>
              <TouchableOpacity style={style.button}>
                <Text style={{ ...style.buttonText, fontWeight: "700" }}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  form: {
    backgroundColor: "#1a1a1a",
    borderWidth: 1,
    borderColor: "#191919",
    maxWidth: "100%",
    margin: "auto",
    padding: 20,
  },
  footer: {
    maxWidth: "100%",
    backgroundColor: "#1a1a1a",
    borderWidth: 1,
    borderColor: "#191919",
    margin: "auto",
    textAlign: "center",
    padding: 7,
    fontSize: 14,
  },
  input: {
    width: "100%",
    color: "white",
    borderWidth: 1,
    borderColor: "#333",
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginBottom: 10,
    borderRadius: 20,
  },
  label: {
    color: "#cecece",
    margin: 0,
    fontSize: 12,
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#0079ff",
    marginTop: 17,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    lineHeight: 20,
  },
  fieldset: {
    marginBottom: 3,
  },
  req: {
    color: "red",
    fontSize: 14,
  },
});
