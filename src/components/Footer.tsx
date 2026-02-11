import Link from "next/link";
import Image from "next/image";
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <Shield className="w-8 h-8 text-secondary" />
                            <span className="text-xl font-bold tracking-tight">InsureAI</span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Redefining vehicle insurance in Sri Lanka with AI-powered instant approvals and fast claims.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-muted-foreground hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/packages" className="text-muted-foreground hover:text-white transition-colors">Packages</Link></li>
                            <li><Link href="/about" className="text-muted-foreground hover:text-white transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li><Link href="/claims" className="text-muted-foreground hover:text-white transition-colors">Claims Center</Link></li>
                            <li><Link href="/claims" className="text-muted-foreground hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-white transition-colors">Contact Support</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-white transition-colors">Get a Quote</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-muted-foreground">
                                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                                <span>123 Galle Road, Colombo 03, Sri Lanka</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <span>+94 11 234 5678</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <span>hello@insureai.lk</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
                        <p>© {new Date().getFullYear()} InsureAI Lanka. Licensed by IRC.</p>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="text-right">
                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-0.5">Developed by</p>
                            <p className="text-white font-semibold hover:text-secondary transition-colors cursor-pointer">
                                <a href="https://web.facebook.com/geeth.nipunyasandaruwan" target="_blank" rel="noopener noreferrer">
                                    Geeth N. Sandaruwan
                                </a>
                            </p>
                        </div>
                        <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                            <Image
                                src="/dev-profile.png"
                                alt="Geeth N. Sandaruwan"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
