import React, { useState } from 'react';
import HeaderAdmin from '../components/HeaderAdmin';

function Style(props) {
    const [styleSettings, setStyleSettings] = useState({
        theme: 'light',
        font: 'Roboto'
    });

    const themes = [
        'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk',
        'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe',
        'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee',
        'winter', 'dim'
    ];

    const fonts = [
        'Roboto', 'Open Sans', 'Lato', 'Montserrat', 'Raleway',
        'Poppins', 'Oswald', 'Source Sans Pro', 'Slabo 27px', 'Merriweather'
    ];

    const handleThemeChange = (theme) => {
        setStyleSettings(prev => ({ ...prev, theme }));
    };

    const handleFontChange = (font) => {
        setStyleSettings(prev => ({ ...prev, font }));
    };

    return (
        <div className="min-h-screen bg-gray-100">
        <HeaderAdmin />
        <div className="md:flex p-4 h-full max-w-7xl mx-auto overflow-auto">
          <div className="max-w-3xl mx-auto md:basis-3/5 space-y-4 overflow-y-auto pb-44">
            <div className="card bg-white shadow-lg">
              <div className="card-body">
                <h2 className="card-title">Themes</h2>
                <div className="grid grid-cols-3 gap-2">
                  {themes.map((theme) => (
                    <button
                      key={theme}
                      className={`btn btn-sm ${styleSettings.theme === theme ? 'btn-primary' : 'btn-outline'}`}
                      onClick={() => handleThemeChange(theme)}
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              </div>
            </div>
  
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h2 className="card-title">Fonts</h2>
                <div className="grid grid-cols-2 gap-2">
                  {fonts.map((font) => (
                    <button
                      key={font}
                      className={`btn btn-sm ${styleSettings.font === font ? 'btn-primary' : 'btn-outline'}`}
                      onClick={() => handleFontChange(font)}
                      style={{ fontFamily: font }}
                    >
                      {font}
                    </button>
                  ))}
                </div>
              </div>
            </div>
  
            <button className="btn btn-primary w-full" onClick={() => console.log(styleSettings)}>
              Submit
            </button>
          </div>
  
          <div className="hidden md:block md:basis-2/5 mx-auto max-w-sm">
            <h2 className="text-2xl font-semibold mb-4">Preview</h2>
            {/* <PhoneMockup content={pageContent} product={productContent} /> */}
          </div>
        </div>
      </div>
    );
}

export default Style;