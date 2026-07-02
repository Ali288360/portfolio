import HomePage from "@pages/Home/Home";
import { getEducations } from "@lib/api";

export const revalidate = 3600; // Revalidate every hour

export default async function Index() {
  const educations = await getEducations();
  return (<HomePage educations={educations} />)
}
