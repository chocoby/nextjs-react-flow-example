import ReactFlow, { Background } from "react-flow-renderer";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const elements = [
    { id: '1', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
    // you can also pass a React component as a label
    { id: '2', data: { label: <div>Node 2</div> }, position: { x: 100, y: 100 } },
    { id: 'e1-2', source: '1', target: '2', animated: true },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>React Flow Example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.title}>React Flow Example</header>

      <div className={styles.main}>
        <ReactFlow
          elements={elements}
          snapToGrid={true}
          snapGrid={[15, 15]}
        >
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </div>
  );
}
