import { lusitana } from "../ui/fonts";
import Image from "next/image";
import {
    AtSymbolIcon,
    KeyIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "../ui/button";
import AcmeLogo from "../ui/acme-logo";
export default function Page() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
                <AcmeLogo/>
            </div>
            <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:px-20 m-auto">
                <form className="space-y-3">
                    <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                        <h1 className={`${lusitana.className} mb-3 text-2xl`}>Silakan Masukan dengan akun Anda</h1>
                        <div className="w-full"></div>
                    </div>
                </form>

            </div>
        </main>
        
    )
}