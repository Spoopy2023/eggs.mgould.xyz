import Image from "next/image";
import { Info } from "../../components/elements/alert/info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faInfo } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <code className="font-mono font-bold"><a href="https://mgould.xyz" className="hover:underline">mgould.xyz</a>/<a href="/" className="hover:underline">eggs</a>/<a href="/generic" className="hover:underline">generic</a>/<a className="text-blue-400">go</a></code>
                </p>
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <code className="font-mono font-bold">The button below will take you to a github page with a file for the specified egg.</code>
                </p>
            </div>

            <Info>
                <FontAwesomeIcon icon={faCircleInfo} className="w-5 h-5 animate-pulse" />&nbsp; &nbsp;
                The startup configs and commands may need changing to actually function properly.<br />&nbsp; &nbsp; Users cannot upload their own code as this is built to build the resulting bot.<br />&nbsp; &nbsp; ``GO_PACKAGE`` is the variable for the Go repo for exmaple; github.com/aurieh/ddg-ng<br />&nbsp; &nbsp;  ``EXECUTABLE`` is the variable for the executable that is built for example; ddg-ng
            </Info>

            <div className="mb-32 grid text-center justify-center items-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <center>

                </center>
                <a
                    href="https://raw.githubusercontent.com/Spoopy2023/eggs/master/generic/golang/egg-golang-generic.json"
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
