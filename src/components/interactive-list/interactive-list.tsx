import Gallery from "../gallery/gallery";
import styles from "./interactive-list.module.css";
import {
  BeppoQuestions,
  BeppoQuestionsProps,
} from "../beppo-questions/beppo-questions";
// import Button from "../button/button";
import { useRecommendations } from "../../network/useRecommendations";
import { PreferenceUpdate } from "../../types/preferenceUpdate";

// const getMockRecipe = (index: number): Recipe => ({
//   id: `${index}`,
//   name: index % 2 ? `BBQ Burritos ${index + 1}` : `Tortillas ${index + 1}`,
//   headline:
//     "This dish produces 50% less CO2e from ingredients than an average HelloFresh recipe",
//   image:
//     index % 2 === 0
//       ? "https://img.hellofresh.com/w_828,q_auto,f_auto,c_fill,fl_lossy/hellofresh_s3/image/HF_Y23_R04_W13_DE_L4529-1_Main_low-1d18ee19.jpg"
//       : "https://img.hellofresh.com/w_828,q_auto,f_auto,c_fill,fl_lossy/hellofresh_s3/image/HF_Y23_R16_W51_DE_EXP2348-45_Main_low-2267ee8d.jpg",
//   tags: [
//     ...(index % 1 === 0 ? [{ id: "1", name: "High Protein" }] : []),
//     ...(index % 2 === 0 ? [{ id: "1", name: "Zeit Sparen" }] : []),
//     ...(index % 3 === 0 ? [{ id: "1", name: "Vegetarian" }] : []),
//     ...(index % 4 === 0 ? [{ id: "1", name: "unter 650 Kalorien" }] : []),
//   ],
//   prepTime: 25,
//   nutrition: {
//     energy: 2534,
//     calories: 606,
//     carbohydrate: 52.4,
//     protein: 38.4,
//   },
// });

// const mockRecipes = Array(12)
//   .fill(undefined)
//   .map((_, i) => getMockRecipe(i));

export default function InteractiveList() {
  const [recipes, updatePreferences] = useRecommendations();

  const onBeppoSelection: BeppoQuestionsProps["onSelectionDone"] = (
    options,
    selectedValue
  ) => {
    const parsedForBackend: PreferenceUpdate["preference_updates"] = [
      {
        preference: options.first_option.name,
        preference_change: 3 - selectedValue,
      },
      {
        preference: options.second_option.name,
        preference_change: selectedValue - 3,
      },
    ];

    updatePreferences(parsedForBackend);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recipe finder</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren
      </p>
      {/* <Button onClick={() => setRecipes(shuffleArray([...recipes]))}>Shuffle</Button> */}
      <BeppoQuestions onSelectionDone={onBeppoSelection} />
      <Gallery
        recipes={(recipes ?? []).slice(0, 30)}
        loading={recipes === null}
      />
    </div>
  );
}
