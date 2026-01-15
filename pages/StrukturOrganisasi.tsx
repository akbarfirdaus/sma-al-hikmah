import React from 'react';
import { ORG_STRUCTURE } from '../constants';

// Component for a Single Org Card (Standard)
const OrgCard = ({ name, role, image, isMulti = false }: { name: string; role: string; image: string; isMulti?: boolean }) => (
  <div className={`bg-white rounded-2xl shadow-sm border border-gray-200 p-4 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-md z-10 w-full max-w-[220px] ${isMulti ? 'min-h-[200px]' : ''}`}>
    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-3 border-4 border-gray-50 shadow-inner">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <h4 className="font-serif font-bold text-gray-900 text-sm md:text-base leading-tight mb-1">{name}</h4>
    <p className="font-sans text-xs text-primary font-bold uppercase tracking-wider">{role}</p>
  </div>
);

// Component for Group List Card (TU & Bendahara with Photos)
const GroupCard = ({ title, staffList }: { title: string, staffList: any[] }) => (
  <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm w-72 z-10 hover:shadow-md transition-shadow text-left">
    <h4 className="font-serif font-bold text-gray-900 mb-4 text-lg text-center border-b border-gray-100 pb-3">{title}</h4>
    <div className="flex flex-col gap-4">
      {staffList.map((staff, idx) => (
        <div key={idx} className="flex items-center gap-3">
           <div className="w-12 h-12 flex-shrink-0 rounded-full overflow-hidden border-2 border-gray-50 bg-gray-100 shadow-sm">
              <img src={staff.image} alt={staff.name} className="w-full h-full object-cover" />
           </div>
           <div>
              <div className="font-bold text-sm text-gray-800 leading-tight">{staff.name}</div>
              <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mt-0.5">{staff.role}</div>
           </div>
        </div>
      ))}
    </div>
  </div>
);

// Helper for the tree branches
const TreeNode = ({ children, isFirst, isLast, isOnly }: { children: React.ReactNode, isFirst?: boolean, isLast?: boolean, isOnly?: boolean }) => {
  return (
    <div className="flex flex-col items-center relative px-6 md:px-10">
      {/* Vertical Connector Up (Connects card to horizontal line) */}
      <div className="h-8 w-px bg-gray-300"></div>
      
      {/* Horizontal Connector Logic (Draws the bracket branches) */}
      {!isOnly && (
        <>
          {/* Line to the left (draws from center to left edge) */}
          <div className={`absolute top-0 right-1/2 h-px bg-gray-300 ${isFirst ? 'w-0' : 'w-[50%]'} mr-[-0.5px]`}></div>
          {/* Line to the right (draws from center to right edge) */}
          <div className={`absolute top-0 left-1/2 h-px bg-gray-300 ${isLast ? 'w-0' : 'w-[50%]'} ml-[-0.5px]`}></div>
        </>
      )}
      
      {children}
    </div>
  );
};

const VLine = ({ height = 'h-8' }: { height?: string }) => (
  <div className={`w-px bg-gray-300 ${height}`}></div>
);

const StrukturOrganisasi: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-surface overflow-x-auto">
      <div className="container mx-auto px-6 min-w-[1000px]"> 
        
        <div className="text-center mb-16">
             <span className="font-sans font-bold text-xs tracking-widest text-primary uppercase mb-3 block">Struktur Organisasi</span>
             <h1 className="font-serif text-4xl md:text-5xl text-gray-900">SMA Swasta Al-Hikmah</h1>
        </div>

        <div className="flex flex-col items-center">
            
            {/* --- Level 1: Yayasan --- */}
            <OrgCard {...ORG_STRUCTURE.yayasan} />
            <VLine />
            
            {/* --- Level 2: Kepala Sekolah --- */}
            <OrgCard {...ORG_STRUCTURE.kepsek} />
            <VLine />

            {/* --- Level 3: Wakil Kepala Sekolah --- */}
            <OrgCard {...ORG_STRUCTURE.wakepsek} />
            
            {/* Connector to next level */}
            <VLine height="h-12" />

            {/* --- Level 4: Waka Kurikulum & Kesiswaan --- */}
            {/* Wrapper for the row */}
            <div className="relative flex justify-center">
                {/* Central Vertical Line passing through this level to the next */}
                {/* This creates the continuous spine down the middle */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gray-300 -z-10"></div>

                <TreeNode isFirst>
                    <OrgCard {...ORG_STRUCTURE.wakaKurikulum} />
                </TreeNode>
                
                {/* Spacing is handled by TreeNode padding to ensure lines touch. */}

                <TreeNode isLast>
                     <OrgCard {...ORG_STRUCTURE.wakaKesiswaan} />
                </TreeNode>
            </div>

            {/* Connector from Waka level center down to TU level */}
            {/* Increased height to make the line longer as requested */}
            <div className="h-24 w-px bg-gray-300"></div>

            {/* --- Level 5: Tata Usaha & Bendahara --- */}
            <div className="relative flex justify-center">
                 {/* Central Vertical Line passing through this level to the next */}
                 <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gray-300 -z-10"></div>

                 <TreeNode isFirst>
                    <GroupCard title="Tata Usaha" staffList={ORG_STRUCTURE.tataUsaha} />
                 </TreeNode>

                 <TreeNode isLast>
                    <GroupCard title="Bendahara" staffList={ORG_STRUCTURE.bendahara} />
                 </TreeNode>
            </div>

            {/* Connector to Staff Level */}
            <div className="h-12 w-px bg-gray-300"></div>

            {/* --- Level 6: Staff Bawah --- */}
            <div className="flex justify-center">
                 {ORG_STRUCTURE.staffBawah.map((staff, idx) => (
                     <TreeNode 
                        key={idx} 
                        isFirst={idx === 0} 
                        isLast={idx === ORG_STRUCTURE.staffBawah.length - 1}
                     >
                         <OrgCard {...staff} />
                     </TreeNode>
                 ))}
            </div>

        </div>
        
        <div className="mt-20 text-center max-w-2xl mx-auto text-gray-500 text-sm">
            <p>Struktur organisasi ini disahkan berdasarkan SK Yayasan Perguruan Al-Hikmah Medan dan berlaku untuk periode akademik saat ini.</p>
        </div>

      </div>
    </div>
  );
};

export default StrukturOrganisasi;