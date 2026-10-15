type MockCard={id:string;name:string;category?:string;department?:string;description:string;image?:string};

export function SampleMockCard({item}:{item:MockCard}){return <article className="content-card sample-mock-card"><div className="card-art">{item.image&&<img src={item.image} alt="" loading="lazy"/>}<span className="mock-stamp">MOCKUP</span></div><div className="card-body"><span className="card-kicker">{item.category||item.department||"SAMPLE"} · PREVIEW ONLY</span><h3>{item.name}</h3><p>{item.description}</p></div></article>}
