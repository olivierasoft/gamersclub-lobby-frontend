export interface CountryOptionProps {
    language: 'Português' | 'English' | 'Español',
    icon: string
    hoverEffect?: boolean
    onOptionClickCb?: (language: string) => void
}

export function CountryOption({language, icon, hoverEffect, onOptionClickCb}: CountryOptionProps) {
    return (
        <div onClick={() => onOptionClickCb ? onOptionClickCb(language) : null} className={`flex items-center p-2 cursor-pointer ${hoverEffect ? 'hover:bg-optionHover' : ''}`}>
            <img className="w-6 h-4 cursor-pointer" src={icon} alt="Is a country of user"/>
            <label className="ml-3 text-sm text-center cursor-pointer">{language}</label>
        </div>
    );
}