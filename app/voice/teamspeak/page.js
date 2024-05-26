import { Warning } from "../../components/elements/alert/warning";
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <code className="font-mono font-bold"><a href="https://mgould.xyz" className="hover:underline">mgould.xyz</a>/<a href="/" className="hover:underline">eggs</a>/<a href="/voice" className="hover:underline">voice</a>/<a className="text-blue-400">teamspeak</a></code>
                </p>&nbsp;&nbsp;&nbsp;
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <code className="font-mono font-bold">The button below will take you to a github page with a file for the specified egg.</code>
                </p>
            </div>

            <Warning>
                Teamspeak requires server ports '9987, 10101, 30303' to be allocated to the container running this egg to start.<br/>The server will not run otherwise.
            </Warning>

            <div className="mb-32 grid text-center justify-center items-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <center>

                </center>
                <a
                    href="https://raw.githubusercontent.com/Spoopy2023/eggs/master/voice_servers/teaspeak/egg-tea-speak.json"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Download{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Once you are at the github link save the file to your computer.
                    </p>
                </a>
            </div>
        </main>
    );
}
