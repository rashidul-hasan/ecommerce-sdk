import { ENDPOINTS, fetchTags } from "./constants";

class Settings {
  constructor(sdk) {
    this.sdk = sdk;
  }

  async getAllSettings() {
    let settings = {};
    try {
      const resp = await this.sdk.fetch(ENDPOINTS.settings.all, {}, {
        next: {
          revalidate: process.env.NODE_ENV === "development" ? 0 : 3600,
          tags: [fetchTags.settings],
        },
      });

      if (resp?.data) {
        //make a settings object from array
        resp?.data?.map((item) => {
          let val = item?.value;
          if (val === "null") {
            val = null; //convert string 'null' to actual null
          }
          settings[item?.key] = val;
        });
        return settings;
      }
    } catch (e) {
      console.log("failed to get settings", e);
      return {};
    }
  }

  // ... other methods remain the same
}

export default Settings;
