import React from 'react';

// --- IMPORT ASSETS ---
import imgTeamMeeting from '../../assets/res-2.png';
import imgSupportAgent from '../../assets/res-2.png';

const ContentTextImages = () => {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl">
        
        {/* ================= TEXT CONTENT ================= */}
        <div className="mb-20 space-y-8 text-[#475569] text-base md:text-lg leading-relaxed font-light">
          <p>
            Pellentesque eget felis sit amet arcu aliquam aliquet nec ut diam. Nulla ac tristique est, 
            nec interdum est. Cras convallis ante leo, at accumsan ante mattis ut. Vestibulum eros elit, 
            iaculis non mattis ac, placerat non magna. Interdum et malesuada fames ac ante ipsum primis 
            in faucibus. Sed dui massa, laoreet rutrum dapibus quis, lacinia at libero. Sed at elit 
            pharetra, malesuada quam et, fermentum felis.
          </p>
          <p>
            Quisque ultricies porttitor lectus quis sagittis. Etiam fringilla non justo nec semper. 
            Proin dapibus lobortis commodo. Duis elementum congue nibh, non egestas dolor ultrices 
            sit amet. Suspendisse nec velit mi. Praesent elementum vitae orci in volutpat. In tristique 
            dolor ultrices lectus accumsan, vitae semper lectus ornare. Proin nec diam vitae lorem 
            tincidunt gravida. Nulla facilisis ultrices nisi.
          </p>
        </div>

        {/* ================= IMAGES GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Image */}
          <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-sm">
            <img 
              src={imgTeamMeeting} 
              alt="Team collaboration meeting" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right Image */}
          <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-sm">
            <img 
              src={imgSupportAgent} 
              alt="Customer support agent" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContentTextImages;