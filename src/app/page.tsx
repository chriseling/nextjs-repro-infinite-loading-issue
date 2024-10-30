import ClientComponent from "./ClientComponent";

export default async function Page() {
  const array: { id: number }[] = [
    {
      id: 3,
    },
  ];

  const dataArray = array;
  const dataObject = new Map([[3, array.find((f) => f.id === 3)]]);

  return (
    <div>
      <ClientComponent propA={dataArray} propB={dataObject} />
    </div>
  );
}
