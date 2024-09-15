import { List } from '@/components/List'

const getData = async () => {
  const res = await fetch('http://localhost:3500/data')
  const data = await res.json()
  return data
}

export default async function Home() {
  const data = await getData()

  return (
    <main className="flex min-h-dvh p-8">
      <List data={data} />
    </main>
  )
}










// "use client";

// import React, { useState, useEffect } from 'react';

// interface Company {
//   catchPhrase: string;
// }

// interface User {
//   id: string;
//   name: string;
//   company: Company;
// }

// async function getData(): Promise<User[]> {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data: User[] = await res.json();
//   return data;
// }

// export default function Home() {
//   const [data, setData] = useState<User[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const users = await getData();
//         setData(users);
//       } catch (err) {
//         setError('Failed to fetch data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="w-screen h-screen">
//       <div className="flex justify-center pt-20">
//         <div className="box-border border-2 border-slate-500 border-opacity-50 border-double rounded-md m-2 p-2 flex flex-col space-y-2">
//           {data.map((user) => (
//             <div key={user.id} className="box-border w-auto h-auto border-2 border-slate-600 border-opacity-75 flex rounded-md">
//               <p className="p-2 text-lg text-black bg-slate-50 rounded-l-md">{user.id}</p>
//               <article className="p-2 text-lg text-white bg-slate-500">{user.name}</article>
//               <article className="p-2 text-lg text-white bg-slate-500">{user.company.catchPhrase}</article>
//               <strong className="p-2 text-lg text-red-800 font-bold bg-slate-500 rounded-r-md">X</strong>
//             </div>
//           ))}
//           {/* <button className="outline outline-offset-0 outline-2 outline-slate-600 rounded-md flex hover:outline-offset-4 hover:outline-slate-500">X</button> */}
//         </div>
//       </div>
//     </div>
//   );
// }
