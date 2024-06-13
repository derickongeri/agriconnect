import { useQuasar } from "quasar";
export default function useNotify() {
  const $q = useQuasar();

  const alerts = [
    {
      color: "negative",
      message: "Woah! Danger! You are getting good at this!",
      icon: "report_problem",
    },
  ];

  const notifySuccess = (message) => {
    $q.notify({
      type: "positive",
      message: message || "All right !",
      position: "top",
    });
  };

  const notifyError = (message) => {
    $q.notify({
      type: "negative",
      message: message || "Failed !",
      position: "top",
    });
  };

  const mapSuccess = (message) => {
    $q.notify({
      type: "positive",
      message: message || "All right !",
      position: "center",
    });
  };

  const mapError = (message) => {
    $q.notify({
      type: "negative",
      message: message || "Error !",
      icon: "report_problem",
      position: "center",
      actions: [
        {
          label: "Dismiss",
          color: 'white',
          handler: () => {
            /* console.log('wooow') */
          },
        },
      ],
    });
  };

  return {
    notifySuccess,
    notifyError,
    mapSuccess,
    mapError,
  };
}
