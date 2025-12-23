
import React, { useState, useEffect } from 'react';
import { SERVICES, TESTIMONIALS } from './constants';
import { ServiceRequest } from './types';

// Components defined outside for performance
const Header: React.FC = () => (
  <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 p-2 rounded-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.727 2.903a2 2 0 01-1.39 1.43 11.97 11.97 0 01-4.28 0 2 2 0 01-1.39-1.43l-.727-2.903a2 2 0 00-1.96-1.414l-2.387.477a2 2 0 00-1.022.547l-2.5 2.5a2 2 0 000 2.828l1.01 1.01a11.933 11.933 0 0013.98 0l1.01-1.01a2 2 0 000-2.828l-2.5-2.5z" />
          </svg>
        </div>
        <span className="font-extrabold text-xl tracking-tight text-blue-900">USTA TESİSATÇI</span>
      </div>
      <nav className="hidden md:flex gap-8 font-medium text-gray-600">
        <a href="#services" className="hover:text-blue-600 transition">Hizmetler</a>
        <a href="#about" className="hover:text-blue-600 transition">Hakkımızda</a>
        <a href="#contact" className="hover:text-blue-600 transition">İletişim</a>
      </nav>
      <a href="tel:+905551234567" className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
        Hemen Ara
      </a>
    </div>
  </header>
);

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4 text-center">
      <p className="text-gray-400 mb-4">© 2024 Usta Tesisatçı - 10 Yıllık Tecrübe ve Güven.</p>
      <div className="flex justify-center gap-6">
        <span className="text-sm">Hızlı Servis</span>
        <span className="text-sm">7/24 Destek</span>
        <span className="text-sm">Garantili İşçilik</span>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [formData, setFormData] = useState<ServiceRequest>({
    fullName: '',
    phone: '',
    address: '',
    issue: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating a "mail sent" action. In a real world, we would use an API or Formspree.
    // For this prototype, we'll use mailto: as a fallback, but show a success message first.
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      const emailBody = `Müşteri: ${formData.fullName}%0ADelefon: ${formData.phone}%0AAdres: ${formData.address}%0ASorun: ${formData.issue}`;
      // This would open the user's mail client if we wanted to trigger it automatically:
      // window.location.href = `mailto:tesisatustasi@gmail.com?subject=Yeni Servis Talebi&body=${emailBody}`;
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide animate-bounce">
              PROFESYONEL ÇÖZÜM ORTAĞINIZ
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
              Tesisatınız Emin Ellerde: <br/>
              <span className="text-blue-600">10 Yıllık Tecrübe</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              Evinizdeki her türlü su, gider ve ısıtma sorunu için hızlı, temiz ve garantili hizmet. Biz sadece tamir etmiyoruz, sorununuzu kökten çözüyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-xl shadow-xl shadow-blue-200 hover:bg-blue-700 transform hover:-translate-y-1 transition-all text-center">
                Servis Talebi Oluştur
              </a>
              <a href="tel:+905551234567" className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 text-lg font-bold rounded-xl hover:bg-blue-50 transform hover:-translate-y-1 transition-all text-center">
                Hemen Ara: 0555 123 45 67
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-slate-900">10+</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Yıllık Deneyim</span>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-slate-900">2500+</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Mutlu Müşteri</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Neler Yapıyoruz?</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 max-w-xl mx-auto">
              Modern ekipmanlarımız ve 10 yıllık ustalığımızla her türlü tesisat probleminizi profesyonelce gideriyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl hover:border-transparent transition-all group">
                <div className="text-4xl mb-6 bg-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            {/* Left Info Panel */}
            <div className="md:w-5/12 bg-blue-600 p-10 lg:p-16 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold mb-6">Bize Ulaşın</h2>
                <p className="text-blue-100 text-lg mb-8">
                  Adresinizi ve sorununuzu bırakın, en kısa sürede size geri dönüş yapalım.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Bölge</h4>
                      <p className="text-blue-100 text-sm">Tüm Şehir Geneli Servis</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Telefon</h4>
                      <p className="text-blue-100 text-sm">0555 123 45 67</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-blue-700 p-4 rounded-xl">
                <p className="text-sm font-medium italic">"10 yıllık tecrübemizle sorunlarınıza kalıcı çözüm üretiyoruz."</p>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="md:w-7/12 p-10 lg:p-16">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Ad Soyad</label>
                    <input 
                      required
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      type="text" 
                      placeholder="Adınızı ve soyadınızı girin"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Telefon Numarası</label>
                    <input 
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      type="tel" 
                      placeholder="05XX XXX XX XX"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Açık Adres</label>
                    <textarea 
                      required
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Servis gönderilecek tam adres"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Sorun Nedir?</label>
                    <select 
                      name="issue"
                      value={formData.issue}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    >
                      <option value="">Sorun Seçin</option>
                      <option value="Su Kaçağı">Su Kaçağı</option>
                      <option value="Tıkanıklık">Tıkanıklık</option>
                      <option value="Musluk/Batarya">Musluk/Batarya Tamiri</option>
                      <option value="Isınma/Petek">Isınma/Petek Bakımı</option>
                      <option value="Diğer">Diğer</option>
                    </select>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Gönderiliyor...</span>
                    ) : (
                      <>
                        Servis İsteğini Gönder
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="bg-green-100 p-6 rounded-full mb-8">
                    <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Mesajınız Alındı!</h3>
                  <p className="text-gray-600 mb-8 max-w-sm">
                    Talebiniz bize ulaştı. 10 yıllık tecrübeli ustamız en kısa sürede sizi arayacak ve servise yönlenecektir.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Yeni Bir Talep Gönder
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Müşterilerimiz Ne Diyor?</h2>
            <p className="text-slate-600">Yüzlerce mutlu ev ve iş yeri sahibi yanılıyor olamaz.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="max-w-md bg-gray-50 p-8 rounded-2xl relative">
                <div className="text-blue-600 text-5xl absolute -top-4 -left-2 opacity-20">"</div>
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{t.comment}"</p>
                <h4 className="font-bold text-slate-900">— {t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Hemen Teknik Destek Alın</h2>
            <p className="text-blue-100">Kırmadan, dökmeden, garantili işçilik bir telefon uzağınızda.</p>
          </div>
          <a href="tel:+905551234567" className="bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-extrabold shadow-2xl transform hover:scale-105 transition-all">
            0555 123 45 67
          </a>
        </div>
      </section>

      <Footer />
      
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 flex gap-3 z-50">
        <a href="tel:+905551234567" className="flex-1 bg-green-500 text-white text-center py-4 rounded-xl font-bold flex items-center justify-center gap-2">
           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
           Ara
        </a>
        <a href="#contact" className="flex-1 bg-blue-600 text-white text-center py-4 rounded-xl font-bold">
          Servis İste
        </a>
      </div>
    </div>
  );
};

export default App;
