import ExperienceWrapper from "../components/ExperienceWrapper";

export default async function ExperiencePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <ExperienceWrapper id={id} />;
}
