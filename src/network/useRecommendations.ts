import { useCallback, useEffect, useMemo, useState } from "react";
import { Recipe } from "../types/recipe";
import { PreferenceUpdate } from "../types/preferenceUpdate";
import { post } from "./post";
import { useUser } from "../hooks/use-user";
import { get } from "./get";

export function useRecommendations(): [
  null | Recipe[],
  (preferenceUpdates: PreferenceUpdate["preference_updates"]) => Promise<void>
] {
  const [user] = useUser();
  const [recommendations, setRecommendations] = useState<null | Recipe[]>(null);

  const update = useCallback(
    async (preferenceUpdates: PreferenceUpdate["preference_updates"]) => {
      const data = await post("preferences/add", {
        user,
        preference_updates: preferenceUpdates,
      });
      setRecommendations(data);
    },
    [user]
  );

  // Fetch initial data
  useEffect(() => {
    if (recommendations !== null || user === null) return;

    const getInitialData = async () => {
      const data = await get("recommendations", user);

      // TODO fix
      if (recommendations === null) {
        setRecommendations(data);
      }
    };
    getInitialData();
  }, [recommendations, user]);

  return useMemo(() => [recommendations, update], [recommendations, update]);
}
