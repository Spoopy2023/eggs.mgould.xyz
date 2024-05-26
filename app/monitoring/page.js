import Image from "next/image";
import { Info } from "../components/elements/alert/info";
import Success from "../components/elements/alert/success/Success";
import Head from 'next/head'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <code className="font-mono font-bold"><a href="https://mgould.xyz" className="hover:underline">mgould.xyz</a>/<a href="/" className="hover:underline">eggs</a>/<a className="text-blue-400">monitors</a></code>
                </p>&nbsp;&nbsp;&nbsp;
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <code className="font-mono font-bold">The buttons below will take you to a page of eggs for the specific monitoring application.</code>
                </p>
            </div>

            <br /><br /><br /><br />
            <Success>
                <FontAwesomeIcon icon={faCircleCheck} className="w-5 h-5 animate-pulse" />&nbsp; This page is &nbsp;<p>up-to-date</p>.
            </Success>
            <br />

            <div className="mb-32 grid text-center justify-center items-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <center>

                </center>
                <a
                    href="/monitoring/loki"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Loki{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Runs the Loki monitoring platform.
                    </p>
                </a>
                <a
                    href="/monitoring/prometheus"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Prometheus{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Runs the Prometheus monitoring platform.
                    </p>
                </a>
            </div>
        </main>
    );
}
