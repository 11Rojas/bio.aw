import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="mt-4 p-4 shadow-2xl shadow-white md:px-[440px]" role="contentinfo">
            <div className="container mx-auto">
                {/* Sección de información de la compañía */}
                <section aria-labelledby="company-heading" className="text-white py-8">
                    <h2 id="company-heading" className="font-semibold text-xl">Bio.aw</h2>
                    <p className="text-gray-300 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ad?
                    </p>
                    <div className="flex gap-4 pt-4 text-gray-300">
                        <a href="https://instagram.com" aria-label="Instagram">
                            <Instagram/>
                        </a>
                        <a href="https://facebook.com" aria-label="Facebook">
                            <Facebook/>
                        </a>
                        <a href="https://twitter.com" aria-label="Twitter">
                            <Twitter/>
                        </a>
                    </div>
                </section>

                {/* Navegación del footer */}
                <nav aria-label="Footer navigation">
                    <div className="grid grid-cols-2 gap-y-8">
                        {/* Sección de redes sociales */}
                        <section aria-labelledby="social-media-heading">
                            <h3 id="social-media-heading" className="font-semibold text-white py-2">Social Media</h3>
                            <ul className="flex flex-col gap-y-4 text-sm">
                                <li><a href="#" className="text-gray-300 hover:text-white">Discord</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Facebook</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Instagram</a></li>
                            </ul>
                        </section>

                        {/* Sección de documentación */}
                        <section aria-labelledby="documentation-heading">
                            <h3 id="documentation-heading" className="font-semibold text-white py-2">Documentation</h3>
                            <ul className="flex flex-col gap-y-4 text-sm">
                                <li><a href="#" className="text-gray-300 hover:text-white">API Docs</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Library</a></li>
                            </ul>
                        </section>

                        {/* Sección de enlaces */}
                        <section aria-labelledby="links-heading">
                            <h3 id="links-heading" className="font-semibold text-white py-2">Links</h3>
                            <ul className="flex flex-col gap-y-4 text-sm">
                                <li><a href="#" className="text-gray-300 hover:text-white">Sign in</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Sign up</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Dashboard</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Leaderboard</a></li>
                            </ul>
                        </section>

                        {/* Sección legal */}
                        <section aria-labelledby="legal-heading">
                            <h3 id="legal-heading" className="font-semibold text-white py-2">Legal</h3>
                            <ul className="flex flex-col gap-y-4 text-sm">
                                <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                            </ul>
                        </section>
                    </div>
                </nav>

                {/* Copyright */}
                <div className="text-white pt-6 text-sm">
                    <p>&copy; {new Date().getFullYear()} bio.aw. All rights reserved. Product by Bio.aw.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;