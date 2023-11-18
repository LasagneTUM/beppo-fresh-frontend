export interface PreferenceUpdate {
  user: string;
  preference_updates: {
    preference: string;
    preference_change: number;
  }[];
}
