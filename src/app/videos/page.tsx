// src/app/videos/page.tsx
"use client";
import { useEffect, useState } from "react";
import type { Metadata } from "next";

const ADMIN_PASSWORD = "pantera2025";
const VIDEO_STORAGE_KEY = "pl_videos";

type VideoItem = {
  id: string;
  title: string;
  dest: string;
  type: "cloudinary" | "youtube";
  url: string;
};

function loadVideos(): VideoItem[] {
  try { return JSON.parse(localStorage.getItem(VIDEO_STORAGE_KEY) || "[]"); } catch { return []; }
}
function saveVideos(v: VideoItem[]) {
  try { localStorage.setItem(VIDEO_STORAGE_KEY, JSON.stringify(v)); } catch {}
}

const TG_ICON = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779538770/Telegram_logo_kdtfle.svg";
const IG_ICON = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779538594/Instagram_qdbqub.png";

export default function VideosPage() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [adminOpen, setAdminOpen] = useState(false);
  const [pwInput, setPwInput]     = useState("");
  const [pwError, setPwError]     = useState(false);
  const [authed,  setAuthed]      = useState(false);
  const [form, setForm] = useState({ title:"", dest:"Дубай", type:"youtube" as "cloudinary"|"youtube", url:"" });
  const [formErr, setFormErr] = useState("");

  useEffect(() => { setVideos(loadVideos()); }, []);

  function login() {
    if (pwInput === ADMIN_PASSWORD) { setAuthed(true); setPwError(false); }
    else { setPwError(true); }
  }

  function addVideo() {
    if (!form.title.trim() || !form.url.trim()) { setFormErr("Заполните все поля"); return; }
    const newItem: VideoItem = { id: Date.now().toString(), ...form };
    const updated = [newItem, ...videos];
    setVideos(updated); saveVideos(updated);
    setForm({ title:"", dest:"Дубай", type:"youtube", url:"" }); setFormErr("");
  }

  function deleteVideo(id: string) {
    const updated = videos.filter(v => v.id !== id);
    setVideos(updated); saveVideos(updated);
  }

  function getEmbedUrl(v: VideoItem) {
    if (v.type === "youtube") {
      const match = v.url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      return match ? `https://www.youtube.com/embed/${match[1]}` : v.url;
    }
    return v.url;
  }

  const DESTS = ["Дубай","Шарм Эль Шейх","Турция","Мальдивы","Таиланд","Грузия","Азербайджан","Другое"];

  return (
    <>
      <section style={{ background:"linear-gradient(135deg,#0d1b2a,#1a2b3c)", padding:"100px 0 48px", textAlign:"center" }}>
        <div className="site-container">
          <span className="section-tag" style={{ color:"#ffd166" }}>🎬 Видеообзоры</span>
          <h1 style={{ color:"#fff", fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:900, margin:"12px 0 14px" }}>
            Видеообзоры отелей и направлений
          </h1>
          <p style={{ color:"rgba(255,255,255,0.7)", fontSize:15, maxWidth:480, margin:"0 auto" }}>
            Смотрите реальные видео с наших туров — отели, пляжи, экскурсии
          </p>
        </div>
      </section>

      <div className="site-container" style={{ padding:"48px 20px 80px" }}>

        {videos.length === 0 ? (
          <div style={{ textAlign:"center", padding:"60px 0" }}>
            <div style={{ fontSize:64, marginBottom:20 }}>🎬</div>
            <h2 style={{ fontSize:22, fontWeight:800, marginBottom:10 }}>Видеообзоры скоро появятся</h2>
            <p style={{ color:"#64748b", fontSize:14, maxWidth:360, margin:"0 auto 32px", lineHeight:1.7 }}>
              Мы готовим видеообзоры наших направлений. Подпишитесь чтобы не пропустить!
            </p>
            <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
              <a href="https://www.instagram.com/tury_tashkent/" target="_blank" rel="noopener noreferrer"
                style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#e1306c", color:"#fff", fontWeight:700, fontSize:14, padding:"11px 22px", borderRadius:11, textDecoration:"none" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IG_ICON} alt="Instagram" style={{ width:20, height:20 }} />
                Instagram
              </a>
              <a href="https://t.me/tury_iz_tashkenta" target="_blank" rel="noopener noreferrer"
                style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#2ca5e0", color:"#fff", fontWeight:700, fontSize:14, padding:"11px 22px", borderRadius:11, textDecoration:"none" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={TG_ICON} alt="Telegram" style={{ width:20, height:20 }} />
                Telegram канал
              </a>
            </div>
          </div>
        ) : (
          <div className="videos-grid">
            {videos.map(v => (
              <div key={v.id} className="video-card">
                <div className="video-frame">
                  {v.type === "youtube" ? (
                    <iframe src={getEmbedUrl(v)} title={v.title} frameBorder="0" allowFullScreen
                      style={{ width:"100%", height:"100%", border:"none" }} />
                  ) : (
                    <video src={v.url} controls style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                  )}
                </div>
                <div className="video-info">
                  <span className="video-dest">{v.dest}</span>
                  <h3>{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Admin button */}
        <div style={{ textAlign:"center", marginTop:48 }}>
          <button className="admin-toggle-btn" onClick={() => setAdminOpen(o => !o)}>
            🔐 Управление видео
          </button>
        </div>

        {/* Admin panel */}
        {adminOpen && (
          <div className="admin-panel">
            {!authed ? (
              <div className="admin-login">
                <h3>🔒 Вход для администратора</h3>
                <input type="password" placeholder="Пароль" value={pwInput}
                  onChange={e => setPwInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && login()}
                  className={pwError ? "input-err" : ""} />
                {pwError && <p className="err-msg">Неверный пароль</p>}
                <button className="btn-primary" onClick={login}>Войти</button>
              </div>
            ) : (
              <div className="admin-form">
                <h3>➕ Добавить видео</h3>
                <div className="admin-row">
                  <input type="text" placeholder="Название видео" value={form.title}
                    onChange={e => setForm(f => ({...f, title:e.target.value}))} />
                  <select value={form.dest} onChange={e => setForm(f => ({...f, dest:e.target.value}))}>
                    {DESTS.map(d => <option key={d}>{d}</option>)}
                  </select>
                  <select value={form.type} onChange={e => setForm(f => ({...f, type:e.target.value as "cloudinary"|"youtube"}))}>
                    <option value="youtube">YouTube</option>
                    <option value="cloudinary">Cloudinary (mp4)</option>
                  </select>
                </div>
                <div className="admin-row">
                  <input type="text" placeholder={form.type === "youtube" ? "Ссылка YouTube" : "Ссылка Cloudinary (.mp4)"}
                    value={form.url} onChange={e => setForm(f => ({...f, url:e.target.value}))} style={{ flex:1 }} />
                  <button className="btn-primary" onClick={addVideo}>Добавить</button>
                </div>
                {formErr && <p className="err-msg">{formErr}</p>}
                {videos.length > 0 && (
                  <div className="admin-list">
                    <h4>Загруженные видео ({videos.length})</h4>
                    {videos.map(v => (
                      <div key={v.id} className="admin-list-item">
                        <span className="ali-dest">{v.dest}</span>
                        <span className="ali-title">{v.title}</span>
                        <span className="ali-type">{v.type}</span>
                        <button className="ali-del" onClick={() => deleteVideo(v.id)}>✕</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
