type SocialLink={platform:string;url:string;enabled:boolean};

function Glyph({platform}:{platform:string}){
  const common={width:19,height:19,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round" as const,strokeLinejoin:"round" as const,"aria-hidden":true as const};
  if(platform==="Instagram")return <svg {...common}><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.8" cy="6.5" r=".7" fill="currentColor" stroke="none"/></svg>;
  if(platform==="LinkedIn")return <svg {...common}><path d="M5 9v10M5 5.2v.2M10 19v-5.4a3.6 3.6 0 0 1 7.2 0V19M10 9v10"/><circle cx="5" cy="5.4" r="1" fill="currentColor" stroke="none"/></svg>;
  if(platform==="YouTube")return <svg {...common}><rect x="2.7" y="5.2" width="18.6" height="13.6" rx="4"/><path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none"/></svg>;
  return <svg {...common}><path d="M5 4h3.4L19 20h-3.4L5 4Zm0 16 6-6m2-4 6-6"/></svg>;
}

export function SocialLinks({links}:{links:SocialLink[]}){return <div className="social-links" aria-label="Social media">{links.filter(x=>x.enabled).map(item=>item.url?<a className="social-icon" href={item.url} key={item.platform} target="_blank" rel="noopener noreferrer" aria-label={`FEINCORE on ${item.platform}`} title={item.platform}><Glyph platform={item.platform}/></a>:<span className="social-icon social-icon-pending" key={item.platform} aria-label={`${item.platform} profile not configured`} title={`${item.platform} profile not configured`}><Glyph platform={item.platform}/></span>)}</div>}
