import { ref } from "vue";
import axios from "axios";

const user = ref({
  email: "derickongeri@gmail.com",
  user_metadata: {
    firstName: "Derick",
    lastName: "Ongeri",
    role: "project manager",
    grantee: "helvetas",
  },
});

export default function userAuth() {
  const baseUrl = "http://139.84.235.200/auth";

  const login = async ({ email, password }) => {
    await axios
      .post(baseUrl + `/login/`, {
        email,
        password,
      })
      .then((res) => {
        user.value = res.data.metadata;
      })
      .catch((error) => {
        console.log(error.response);
        throw error.response.data.message;
      });

    console.log(user.value);

    return user;
  };

  const loginWithSocialProvider = async (provider) => {
    const { user, error } = await supabase.auth.signIn({ provider });
    if (error) throw error;
    return user;
  };

  const logout = async () => {
    console.log(user.value);
    await axios
      .post(baseUrl + `/logout/`, {
        email: user.value.email,
      })
      .then((res) => {
        user.value = null;
      });
  };

  const isLoggedIn = () => {
    return !!user.value;
  };

  const register = async ({
    firstName,
    lastName,
    email,
    sector,
    role,
    otherRoles,
    organization,
    password,
  }) => {
    console.log(firstName);
    await axios
      .post(baseUrl + `/signup/`, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        sector: sector,
        role: role,
        other_roles: otherRoles,
        institution: organization,
        password: password,
        country: "kenya",
      })
      .then((res) => {
        user.value = res.data.user;
      })
      .catch((error) => {
        throw error.response.data.message;
      });
    return user;
  };

  const update = async (data) => {
    const { user, error } = await supabase.auth.update(data);
    if (error) throw error;
    return user;
  };

  const sendPasswordRestEmail = async (email) => {
    await axios
      .post(baseUrl + `/passwordupdate/`, {
        email: email,
      })
      .then((res) => {
        user.value = res.data.metadata;
      });
    return user;
  };

  const updateUserPassword = async ({ token, uid, password }) => {
    console.log(token, uid, password);
    await axios
      .post(baseUrl + `/resetpassword/`, {
        token: token,
        uid: uid,
        password: password,
      })
      .then((res) => {
        user.value = res.data.metadata;
      });
    return user;
  };

  return {
    user,
    login,
    loginWithSocialProvider,
    logout,
    isLoggedIn,
    register,
    update,
    sendPasswordRestEmail,
    updateUserPassword,
  };
}
