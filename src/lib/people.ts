import { getCollection, type CollectionEntry } from "astro:content";

type Person = CollectionEntry<"people">;
export type Participant = CollectionEntry<"panels">["data"]["participants"][number];

export type DisplayPerson = Person["data"] & {
  appearanceId: string;
  personId: string;
  role: string;
  title?: string;
  order: number;
};

export async function createPeopleResolver() {
  const people = await getCollection("people");
  const peopleById = new Map(people.map((person) => [person.id, person.data]));

  return (participants: Participant[]): DisplayPerson[] =>
    participants
      .map((participant) => {
        const personId = participant.person.id;
        const person = peopleById.get(personId);
        if (!person) throw new Error(`Missing 2026 person "${personId}".`);

        return {
          ...person,
          appearanceId: `${personId}-${participant.role}`,
          personId,
          role: participant.role,
          title: participant.title,
          order: participant.order,
        };
      })
      .sort((a, b) => a.order - b.order);
}
