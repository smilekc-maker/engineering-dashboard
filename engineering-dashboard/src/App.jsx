import { useState } from "react";

// ── 潤泰 Logo SVG ──────────────────────────────────────────
const LOGO_B64 = "data:image/png;base64,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";
const RuntaiLogo = ({ size = 40 }) => (
  <img src={LOGO_B64} width={size} height={size} style={{ borderRadius:"50%", objectFit:"cover" }} alt="潤泰Logo" />
);

// ── 欄定義 ────────────────────────────────────────────────
const COLS = [
  { id: "overview",   label: "總覽",       icon: "📊", short: "總覽" },
  { id: "milestone",  label: "里程碑",     icon: "🎯", short: "里程碑" },
  { id: "weekly",     label: "週報明細",   icon: "📋", short: "週報" },
  { id: "safety",     label: "安衞相關",   icon: "🦺", short: "安衞" },
  { id: "quality",    label: "品質相關",   icon: "✅", short: "品質" },
  { id: "mep",        label: "機電相關",   icon: "⚡", short: "機電" },
  { id: "km",         label: "KM／EL",    icon: "📚", short: "KM/EL" },
  { id: "diff",       label: "與上週差異", icon: "🔄", short: "差異" },
];

// ── 專案資料 ──────────────────────────────────────────────
const PROJECTS = [
  {
    id: "tainan", name: "台南群聯樓", short: "台南群聯",
    owner: "群聯電子", contract: "13.5億", deadline: "2026/12/26",
    floors: "B2F＋6F", area: "8,197㎡", phase: "帷幕外牆＋室裝＋消防",
    color: "#C8102E", progress: 78, reportDate: "05/22～05/23",
    highlight: "🎯 目標10月送水送電｜消防掛件：8/14",
    stats: [{ label: "帷幕鋁版", value: "96%" }, { label: "玻璃4-5F", value: "90%" }, { label: "使照目標", value: "10月" }],
    data: {
      overview: { summary: "帷幕外牆各層鋁版96%完成，室內裝修積極推進，目標2026/10取得使照。", kpis: [["帷幕鋁版","96%"],["玻璃(4-5F)","90%"],["整體進度","78%"]] },
      milestone: [
        { date:"06/01", label:"屋頂南側防水壓層RC" },
        { date:"06/15", label:"消防變更掛件申請" },
        { date:"07/07", label:"施工電梯拆除" },
        { date:"07/11", label:"正式電梯啟用" },
        { date:"10/11", label:"使照取得目標" },
      ],
      weekly: ["R1F聚脲防水完成5/17，96hr試水進行中5/22","5F隔間：5/18~6/15；6F隔間：5/26~6/25","廁所給排水管、3F污廢水吊管、5F排煙風管施作","R1屋頂防水壓層：北側5/29 / 南側6/1 RC"],
      safety: ["各層作業面落實工安巡查","電梯安裝期間圍籬管制","外牆吊掛作業安全帶100%佩戴"],
      quality: ["CW7帷幕玻璃施工前品質確認","防水層96hr試水驗收","室裝隔間骨架垂直度複驗"],
      mep: ["廁所給排水管路施作","3F污廢水吊管佈設","5F排煙風管施作中"],
      km: ["帷幕系統施工SOP文件更新","防水試水驗收紀錄存檔","使照申請文件整備中"],
      diff: [
        { type:"up",   text:"帷幕玻璃4F-5F：85%→90%（↑5%）" },
        { type:"up",   text:"R1F聚脲防水完成，96hr試水啟動（新增）" },
        { type:"down", text:"5F-6F玻璃進度45%，較預期落後10%" },
        { type:"same", text:"鋁版各層維持96%，無變化" },
        { type:"warn", text:"景觀第1、3區啟動推遲至7/1" },
      ],
    },
  },
  {
    id: "global", name: "全球人壽新總部", short: "全球總部",
    owner: "全球人壽保險", contract: "47.62億", deadline: "2026/07/31",
    floors: "B4F+N棟11F/S棟13F", area: "9,858㎡", phase: "室內裝修＋景觀",
    color: "#1D4ED8", progress: 91, reportDate: "05/24",
    highlight: "⚠️ 景觀因帷幕延遲，外溝延至7/10",
    stats: [{ label: "完工率", value: "91%" }, { label: "使照送件", value: "7/29" }, { label: "工期至", value: "7/31" }],
    data: {
      overview: { summary: "室內裝修與地下層水箱工程同步推進，使照預計7/29送件，7/31取得。", kpis: [["完工率","91%"],["使照送件","7/29"],["景觀進度","延遲"]] },
      milestone: [
        { date:"05/27", label:"B4FL第2區申報" },
        { date:"06/06", label:"北棟8~11F高架地板完成" },
        { date:"06/18", label:"門牌初編" },
        { date:"07/22", label:"昇降設備合格證" },
        { date:"07/29", label:"使照送件" },
      ],
      weekly: ["北棟天空步道研磨修整、石材鐵件施作","取土口回封、筏基防水、水箱施作","B4FL第1區勘驗5/12完成","南棟屋頂防水壓層第3區5/25完成"],
      safety: ["地下層施工通風管理","水箱作業密閉空間作業許可","高架地板安裝防墜措施"],
      quality: ["水箱蓋UHPC疊合板品質驗收","B4FL防水層勘驗","昇降設備安裝前後檢驗"],
      mep: ["東北水箱蓋RC養護完成5/22","北棟水箱UHPC疊合板施作","南棟水箱第二升層模板拆模"],
      km: ["使照申請文件清單更新","景觀延遲追蹤表建立","第177次工務會議紀錄存檔"],
      diff: [
        { type:"up",   text:"東北水箱蓋RC 5/22完成（提前1天）" },
        { type:"up",   text:"北棟天花骨架封板5/23完成" },
        { type:"down", text:"景觀工程延遲：外溝延至7/10、喬木延至7/16" },
        { type:"warn", text:"使照送件路徑需確認昇降設備合格證時程" },
        { type:"same", text:"B4FL勘驗進度如期推進" },
      ],
    },
  },
  {
    id: "xindu", name: "板橋新都段", short: "新都段",
    owner: "潤泰建設", contract: "15.38億", deadline: "2029/02/05",
    floors: "B1F＋25F", area: "3,319㎡", phase: "壁樁施作＋土方",
    color: "#059669", progress: 12, reportDate: "05/23",
    highlight: "🔧 壁樁N8單元5/25啟動｜180T吊車5/28進場",
    stats: [{ label: "乾土完成", value: "116%" }, { label: "濕土完成", value: "68%" }, { label: "竣工", value: "2029/02" }],
    data: {
      overview: { summary: "試樁3支完成，壁樁N8單元本週啟動，乾土出土超標完成116%，濕土68%。", kpis: [["乾土出土","116%"],["濕土出土","68%"],["壁樁進度","N8啟動"]] },
      milestone: [
        { date:"05/25", label:"N8單元啟動抓掘" },
        { date:"05/28", label:"180T吊車進場" },
        { date:"05/29", label:"N8澆置" },
        { date:"05/30", label:"N22抓掘啟動" },
        { date:"2029/02", label:"竣工目標" },
      ],
      weekly: ["試樁3支完成✓","Masago機具5/25進場組裝","70T吊車5/22進場","鋼筋床打設5/23執行中","N8澆置預計5/29"],
      safety: ["Masago抓掘機具進場安全交底","吊車作業區域管制","土方出土車輛進出安全管理"],
      quality: ["試樁品質檢驗報告完成","壁樁施作前地質確認","N8鋼筋籠尺寸複核"],
      mep: ["暫無機電作業（地下結構階段）","施工用電配置確認","排水設施佈設"],
      km: ["試樁施工紀錄存檔","壁樁施工日報建立","土方出土載重紀錄"],
      diff: [
        { type:"up",   text:"試樁3支全數完成（上週尚未完成）" },
        { type:"up",   text:"乾土出土116%，超越設計量" },
        { type:"up",   text:"180T吊車確認5/28進場（新增）" },
        { type:"same", text:"濕土出土68%，進度持平" },
        { type:"warn", text:"N8澆置需確認模板作業時程" },
      ],
    },
  },
  {
    id: "huancui", name: "板橋環翠段", short: "環翠段",
    owner: "潤泰創新國際", contract: "23.45億", deadline: "2029/08/22",
    floors: "B4F＋28F", area: "4,751㎡", phase: "連續壁＋壁樁",
    color: "#7C3AED", progress: 8, reportDate: "05/23",
    highlight: "✅ 5/22機具修復完成，恢復2部機施工",
    stats: [{ label: "連續壁", value: "85%" }, { label: "扶壁", value: "86%" }, { label: "累計出土", value: "7,053M³" }],
    data: {
      overview: { summary: "連續壁85%、扶壁86%完成，1部機5/22修復，壁樁P1-29灌漿完成，累計出土7,053M³。", kpis: [["連續壁","85%"],["扶壁","86%"],["壁樁P1","6%"]] },
      milestone: [
        { date:"05/23", label:"恢復2部機施工" },
        { date:"本週", label:"壁樁P1-12完成（目標）" },
        { date:"近期", label:"連續壁48單元完成" },
        { date:"2029/08", label:"竣工目標" },
      ],
      weekly: ["連續壁41/48單元（85%）","扶壁12/14單元（86%）","壁樁P1：1/16完成（6%）","本週出土1,236M³","P1-29灌漿完成"],
      safety: ["連續壁施工邊坡監測","機具維修作業安全確認","夜間施工照明管理"],
      quality: ["連續壁垂直度量測紀錄","壁樁灌漿配比確認","出土土質分類紀錄"],
      mep: ["暫無機電作業","點井降水系統監控","施工臨電管理"],
      km: ["連續壁施工進度週報","機具故障維修紀錄","出土量累計統計"],
      diff: [
        { type:"up",   text:"連續壁：79%→85%（↑6%，完成5單元）" },
        { type:"up",   text:"扶壁：79%→86%（↑7%）" },
        { type:"down", text:"壁樁P1因機具故障延誤，僅完成1/16" },
        { type:"up",   text:"故障機具5/22修復，5/23恢復2部機" },
        { type:"same", text:"出土計畫量達成100%" },
      ],
    },
  },
  {
    id: "huwee", name: "臺大虎尾醫院", short: "臺大虎尾",
    owner: "台大雲林分院", contract: "84.86億", deadline: "118/02/16",
    floors: "A棟B3F+10F/B棟B1F+2F", area: "1,200+15天", phase: "基礎開挖＋BC棟",
    color: "#DC2626", progress: 18, reportDate: "05/22",
    highlight: "🏗️ BC棟第二挖5/22完成，第三挖5/30啟動",
    stats: [{ label: "KT版預組", value: "51.4%" }, { label: "KT版澆置", value: "31.7%" }, { label: "BC棟開挖", value: "GL-4.2M" }],
    data: {
      overview: { summary: "A棟基礎版各區陸續完成，BC棟第二挖完成GL-4.2M，KT版生產預組51.4%。", kpis: [["KT版預組","51.4%"],["KT版澆置","31.7%"],["點井降水","持續運作"]] },
      milestone: [
        { date:"05/22", label:"BC棟第二挖完成" },
        { date:"05/22~05/29", label:"安全支撐第二撐(GL-3.3)" },
        { date:"05/30", label:"第三挖GL-7.3M啟動" },
        { date:"06/12", label:"第三挖完成（預計）" },
        { date:"118/02", label:"竣工目標" },
      ],
      weekly: ["第4區土方降挖5/16啟動","第1區基礎版PC+防水+壓層完成","KT版：170/331片預組(51.4%)","BC棟第二挖GL-4.2M完成5/22","點井50口+15組排井持續運作"],
      safety: ["深開挖邊坡位移監測","點井降水系統安全管理","塔吊基礎施工安全圍籬"],
      quality: ["基礎版PC強度試體留存","KT版澆置品質管控","防水層施作前基面確認"],
      mep: ["點井降水50口持續運作","地下水位監測GL-16.94m","塔吊基礎RC施作中"],
      km: ["KT版生產進度追蹤表","基礎開挖施工日誌","點井降水監測週報"],
      diff: [
        { type:"up",   text:"第1區基礎版PC+防水+壓層全數完成" },
        { type:"up",   text:"BC棟第二挖GL-4.2M 5/22完成" },
        { type:"up",   text:"KT版預組：42%→51.4%（↑9.4%）" },
        { type:"same", text:"點井降水持續穩定，地下水位持平" },
        { type:"warn", text:"第三挖5/30啟動，需確認安全支撐完成時程" },
      ],
    },
  },
  {
    id: "nangang", name: "南港之星", short: "南港之星",
    owner: "潤泰創新國際", contract: "171.06億", deadline: "2030/07/13",
    floors: "B5F+32/37F×4棟", area: "已執行1,044天", phase: "連續壁＋逆打結構",
    color: "#0891B2", progress: 41, reportDate: "05/22",
    highlight: "✅ 南基地連續壁＋壁樁100%全數完成",
    stats: [{ label: "南基地連續壁", value: "100%" }, { label: "北基地連續壁", value: "88%" }, { label: "北基地出土", value: "93%" }],
    data: {
      overview: { summary: "南基地連續壁及壁樁全數完成，北基地連續壁88%，1C鋼構吊裝完成，已執行1,044天。", kpis: [["南基地","100%✓"],["北基地連續壁","88.1%"],["北基地出土","93%"]] },
      milestone: [
        { date:"05/23", label:"B2F-1區PC澆置" },
        { date:"05/28", label:"上版筋綁紮完成" },
        { date:"05/30", label:"B2-C區RC澆築" },
        { date:"06/15", label:"B1F-4區RC澆築目標" },
        { date:"2030/07", label:"竣工目標" },
      ],
      weekly: ["南基地連續壁80/80(100%)✓","南基地壁樁56/56(100%)✓","北基地連續壁96/109(88.1%)","1C鋼構吊裝完成5/1~5/19","北基地出土42,360M³(93%)"],
      safety: ["逆打工法作業安全管理","多棟同步施工協調管制","北基地出土車輛動線管制"],
      quality: ["南基地連續壁品質全驗完成","1C鋼構焊接品質紀錄","B2-C區RC澆築前品質確認"],
      mep: ["B2F機電配管5/20完成","地下層臨電配置管理","逆打結構機電預埋確認"],
      km: ["南基地施工完工紀錄存檔","鋼構吊裝作業報告","里程碑達成追蹤更新"],
      diff: [
        { type:"up",   text:"南基地連續壁＋壁樁100%完成（重大里程碑）" },
        { type:"up",   text:"北基地連續壁：85%→88.1%（↑3.1%）" },
        { type:"up",   text:"1C鋼構吊裝5/19全數完成" },
        { type:"up",   text:"北基地出土：91%→93%（↑2%）" },
        { type:"same", text:"B2-C區RC澆築按計畫推進，預計5/30" },
      ],
    },
  },
];

// ── 輔助元件 ──────────────────────────────────────────────
function PBar({ pct, color, height = 6 }) {
  return (
    <div style={{ background: "#DDD5C4", borderRadius: 4, height, overflow: "hidden" }}>
      <div style={{ width: `${Math.min(pct,100)}%`, height: "100%", background: color, borderRadius: 4 }} />
    </div>
  );
}

// ── 單格內容 ──────────────────────────────────────────────
function CellContent({ proj, colId }) {
  const d = proj.data[colId];
  const c = proj.color;

  if (colId === "overview") return (
    <div>
      <p style={{ fontSize: 11, color: "#5C4A35", lineHeight: 1.6, marginBottom: 8 }}>{d.summary}</p>
      {d.kpis.map(([k,v],i) => (
        <div key={i} style={{ display:"flex", justifyContent:"space-between", fontSize:11, padding:"3px 0", borderBottom:"1px solid #DDD5C4" }}>
          <span style={{ color:"#9E836A" }}>{k}</span>
          <span style={{ fontWeight:700, color:c }}>{v}</span>
        </div>
      ))}
    </div>
  );

  if (colId === "diff") {
    const cfg = {
      up:   { icon:"▲", bg:"#D1FAE5", border:"#6EE7B7", text:"#065F46", label:"進步" },
      down: { icon:"▼", bg:"#FEE2E2", border:"#FCA5A5", text:"#991B1B", label:"落後" },
      warn: { icon:"⚠", bg:"#FEF3C7", border:"#FCD34D", text:"#92400E", label:"注意" },
      same: { icon:"─", bg:"#F1F5F9", border:"#CBD5E1", text:"#475569", label:"持平" },
    };
    return (
      <div style={{ display:"flex", flexDirection:"column", gap:5 }}>
        {d.map((item,i) => {
          const s = cfg[item.type] || cfg.same;
          return (
            <div key={i} style={{
              display:"flex", gap:6, alignItems:"flex-start",
              background:s.bg, border:`1px solid ${s.border}`,
              borderRadius:5, padding:"4px 7px",
            }}>
              <span style={{ fontSize:10, color:s.text, fontWeight:800, flexShrink:0, marginTop:1 }}>{s.icon}</span>
              <span style={{ fontSize:10, color:s.text, lineHeight:1.5 }}>{item.text}</span>
            </div>
          );
        })}
      </div>
    );
  }

  if (colId === "milestone") return (
    <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
      {d.map((m,i) => (
        <div key={i} style={{ display:"flex", gap:6, alignItems:"flex-start" }}>
          <span style={{ fontSize:9, fontWeight:800, color:c, minWidth:34, paddingTop:1 }}>{m.date}</span>
          <span style={{ fontSize:10, color:"#4A3828", lineHeight:1.5 }}>{m.label}</span>
        </div>
      ))}
    </div>
  );

  // list types: weekly, safety, quality, mep, km
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:3 }}>
      {d.map((item,i) => (
        <div key={i} style={{ display:"flex", gap:5, alignItems:"flex-start" }}>
          <span style={{ color:c, fontSize:9, marginTop:2, flexShrink:0 }}>▸</span>
          <span style={{ fontSize:10, color:"#4A3828", lineHeight:1.5 }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

// ── 主元件 ────────────────────────────────────────────────
export default function App() {
  const [activeCol, setActiveCol] = useState(null); // null = 全部顯示
  const [hoveredCell, setHoveredCell] = useState(null);

  const visibleCols = activeCol ? COLS.filter(c => c.id === activeCol) : COLS;

  return (
    <div style={{
      display:"flex", flexDirection:"column", height:"100vh",
      background:"#F5F0E8", fontFamily:"'Noto Sans TC','PingFang TC',sans-serif",
      color:"#3D2E1E", overflow:"hidden",
    }}>

      {/* ── 頂部標題列 ── */}
      <header style={{
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"0 20px", height:90, background:"#EDE6D9",
        borderBottom:"2px solid #C9BFA8", flexShrink:0,
      }}>
        {/* 左：Logo + 標題 */}
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          <RuntaiLogo size={58} />
          <div>
            <div style={{ fontWeight:900, fontSize:11, letterSpacing:2, color:"#3D2E1E", lineHeight:1.2 }}>
              建築二處　整合資訊
            </div>
            <div style={{ fontSize:9, color:"#9E836A", fontWeight:600, letterSpacing:1, marginTop:3 }}>
              工程整合週報
            </div>
            <div style={{ fontSize:9, color:"#9E836A", fontWeight:600, letterSpacing:1, marginTop:2 }}>
              115 / 05 / 18 ～ 05 / 24
            </div>
          </div>
        </div>

        {/* 右：欄篩選按鈕（垂直排列改為橫排，手機可卷） */}
        <div style={{ display:"flex", gap:6, alignItems:"center", flexWrap:"wrap", justifyContent:"flex-end", maxWidth:520 }}>
          <button onClick={() => setActiveCol(null)} style={{
            padding:"5px 12px", borderRadius:6, border:"1px solid #C9BFA8", cursor:"pointer",
            fontSize:12, fontWeight:700,
            background: activeCol === null ? "#C8102E" : "#EDE6D9",
            color: activeCol === null ? "#fff" : "#7A6550",
          }}>全部</button>
          {COLS.map(col => (
            <button key={col.id} onClick={() => setActiveCol(activeCol === col.id ? null : col.id)} style={{
              padding:"5px 10px", borderRadius:6, border:"1px solid #C9BFA8", cursor:"pointer",
              fontSize:11, fontWeight:600, whiteSpace:"nowrap",
              background: activeCol === col.id ? "#C8102E" : "#EDE6D9",
              color: activeCol === col.id ? "#fff" : "#7A6550",
              transition:"all 0.2s",
            }}>
              {col.icon} {col.short}
            </button>
          ))}
        </div>
      </header>

      {/* ── 矩陣表體 ── */}
      <div style={{ flex:1, overflowX:"auto", overflowY:"auto" }}>
        <table style={{ borderCollapse:"collapse", width:"100%", minWidth: activeCol ? 600 : 1100 }}>
          <thead>
            <tr style={{ background:"#DDD5C4", position:"sticky", top:0, zIndex:10 }}>
              {/* 專案欄標題 */}
              <th style={{
                padding:"10px 14px", textAlign:"left", fontSize:12, fontWeight:800,
                color:"#7A6550", borderRight:"2px solid #C9BFA8", width:140, minWidth:130,
                position:"sticky", left:0, background:"#DDD5C4", zIndex:11,
              }}>專案 / 項目</th>
              {visibleCols.map(col => (
                <th key={col.id} style={{
                  padding:"10px 14px", textAlign:"left", fontSize:12, fontWeight:800,
                  color: col.id === "diff" ? "#065F46" : "#5C4A35",
                  borderRight:"1px solid #C9BFA8", minWidth:160,
                  background: col.id === "diff"
                    ? (activeCol === "diff" ? "#6EE7B7" : "#D1FAE5")
                    : (activeCol === col.id ? "#C8102E22" : "#DDD5C4"),
                }}>
                  <span style={{ marginRight:5 }}>{col.icon}</span>{col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PROJECTS.map((proj, pi) => (
              <tr key={proj.id} style={{ borderBottom:"2px solid #C9BFA8", background: pi % 2 === 0 ? "#F5F0E8" : "#EDE6D9" }}>

                {/* 專案標籤（固定左欄） */}
                <td style={{
                  padding:"12px 14px", verticalAlign:"top",
                  borderRight:"2px solid #C9BFA8",
                  position:"sticky", left:0, zIndex:5,
                  background: pi % 2 === 0 ? "#F5F0E8" : "#EDE6D9",
                }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
                    <div style={{ width:4, height:36, borderRadius:2, background:proj.color, flexShrink:0 }} />
                    <div>
                      <div style={{ fontWeight:800, fontSize:13, color:"#3D2E1E", lineHeight:1.3 }}>{proj.name}</div>
                      <div style={{ fontSize:10, color:"#9E836A" }}>{proj.owner}</div>
                    </div>
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                    <PBar pct={proj.progress} color={proj.color} />
                    <span style={{ fontSize:11, fontWeight:700, color:proj.color, minWidth:32 }}>{proj.progress}%</span>
                  </div>
                  <div style={{ fontSize:10, color:proj.color, marginTop:5, fontWeight:600,
                    background:`${proj.color}12`, borderRadius:4, padding:"2px 6px" }}>
                    {proj.phase}
                  </div>
                </td>

                {/* 各欄內容 */}
                {visibleCols.map(col => {
                  const key = `${proj.id}-${col.id}`;
                  const hovered = hoveredCell === key;
                  return (
                    <td key={col.id}
                      onMouseEnter={() => setHoveredCell(key)}
                      onMouseLeave={() => setHoveredCell(null)}
                      style={{
                        padding:"10px 12px", verticalAlign:"top",
                        borderRight:"1px solid #C9BFA8",
                        background: hovered ? `${proj.color}10` : "transparent",
                        transition:"background 0.2s",
                        minWidth:160, maxWidth:200,
                      }}>
                      <CellContent proj={proj} colId={col.id} />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── 底部狀態列 ── */}
      <footer style={{
        height:32, background:"#DDD5C4", borderTop:"1px solid #C9BFA8",
        display:"flex", alignItems:"center", padding:"0 20px", gap:20, flexShrink:0,
      }}>
        <span style={{ fontSize:11, color:"#9E836A" }}>建築二處 · 工程整合資訊 · 2026/05/18～05/24</span>
        <span style={{ fontSize:11, color:"#9E836A" }}>6 個專案 · {COLS.length} 類項目</span>
        <span style={{ fontSize:11, color:"#9E836A", marginLeft:"auto" }}>潤泰創新國際</span>
      </footer>
    </div>
  );
}
