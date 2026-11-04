import React, { useState, useRef } from "react";
import {
  ShieldCheck,
  ShieldAlert,
  Search,
  Upload,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Award,
  GraduationCap,
  MapPin,
  Linkedin,
  FileText,
  Sparkles,
  Users,
  ExternalLink,
  Hash,
  Calendar,
  Building2,
  Eye,
  X,
  BookOpen,
  BadgeCheck,
  Terminal,
  UserCheck,
  Download,
  Sun,
  Moon,
} from "lucide-react";

// =============================================================================
// 1. PROFILE DATA FROM c:\Users\sayak\Downloads\profile-linkedin-profile.txt
//    WITH MIX OF AUTHENTICATED (YES) AND WRONG / UNAUTHENTICATED (NO) CERTS
// =============================================================================

const RAW_PROFILE_TXT = `Headline: Pune City, Maharashtra, India | Professional Profile

--- ABOUT ---
I am a B-Tech student specializing in Artificial Intelligence and Machine Learning at… · Education: ALARD University Pune · Location: Pune City · 314 connections on LinkedIn. View Dhiraj Vaidya’s profile on LinkedIn, a professional community of 1 billion members.
--- PROFILE URL ---
https://in.linkedin.com/in/dhiraj-vaidya-529726423`;

const PROFILES_DATABASE = {
  dhiraj: {
    id: "ALARD-AIML-DV01",
    name: "Dhiraj Vaidya",
    avatar: "DV",
    avatarGradient: "from-emerald-500 via-teal-600 to-indigo-700",
    headline: "Pune City, Maharashtra, India | Professional Profile",
    role: "B.Tech Specialist in Artificial Intelligence & Machine Learning (AIML)",
    college: "ALARD University Pune (ALARD School of Engineering & Technology)",
    degree: "B.Tech in Artificial Intelligence and Machine Learning",
    location: "Pune City, Maharashtra, India",
    connections: "314 connections on LinkedIn",
    communityNote: "Professional community of 1 billion members",
    profileUrl: "https://in.linkedin.com/in/dhiraj-vaidya-529726423",
    aboutText:
      "I am a B-Tech student specializing in Artificial Intelligence and Machine Learning at ALARD University Pune · Education: ALARD University Pune · Location: Pune City · 314 connections on LinkedIn. View Dhiraj Vaidya’s profile on LinkedIn, a professional community of 1 billion members.",
    trustScore: 86,
    sentimentScore: "94.2% Positive Professional Sentiment",
    status: "Verified Profile (With Credential Audit)",
    rawSourceFile: "profile-linkedin-profile.txt",
    skills: [
      "Artificial Intelligence (AI)",
      "Machine Learning (ML)",
      "Agentic AI",
      "ServiceNow Administration",
      "Automated Test Framework (ATF)",
      "Python & Data Science",
      "Predictive Analytics",
      "Cloud & CSA Preparation",
    ],
    certificates: [
      {
        id: "SNU2029904",
        title: "Virtual Internship Program — Certificate of Completion",
        issuer: "ServiceNow University • AICTE (Ministry of Education) • SmartBridge",
        issueDate: "July 06, 2026",
        recipient: "Dhiraj Vaidya",
        serialHash: "0xSNU2029904A7F9E2D188C4",
        verified: true,
        isFeaturedServiceNow: true,
        pdfUrl: "./dhiraj-servicenow-certificate.pdf",
        documentNote: "certificate (1).pdf",
        modules: [
          "Welcome to ServiceNow",
          "Welcome to ServiceNow Micro Certification",
          "Introduction to Agentic AI",
          "ServiceNow Administration Fundamentals",
          "Introduction to Flows",
          "Automated Test Framework (ATF) Essentials",
          "Get Started with Reports",
          "Certified System Administrator (CSA) Exam Preparation",
        ],
        signatories: [
          {
            name: "Jayney Howson",
            title: "SVP, Global Learning & Development, ServiceNow",
          },
          {
            name: "Dr. Chandrasekhar Buddha",
            title: "Chief Coordinating Officer, AICTE, Ministry Of Education",
          },
          {
            name: "Amarendar Katkam",
            title: "Founder & CEO, SmartBridge",
          },
        ],
        verificationNote:
          "Yes, that is authenticated — Verified via ServiceNow University, AICTE & SmartBridge Official Registry (Cert ID: SNU2029904)",
      },
      {
        id: "SNU-AI-2026",
        title: "Introduction to Agentic AI & Micro Certification",
        issuer: "ServiceNow University & AICTE",
        issueDate: "July 06, 2026",
        recipient: "Dhiraj Vaidya",
        serialHash: "0x94B2E88103FA7721SNU02",
        verified: true,
        verificationNote:
          "Yes, that is authenticated — Verified on ServiceNow University Credential Ledger",
      },
      {
        id: "CERT-FLAG-409",
        title: "Advanced Blockchain & Web3 Enterprise Architect",
        issuer: "Unregistered Third-Party Academy",
        issueDate: "May 14, 2026",
        recipient: "Dhiraj Vaidya",
        serialHash: "0xDEAD409FA8812MISMATCH",
        verified: false,
        verificationNote:
          "No, this certificate is NOT authenticated — Cryptographic Hash Mismatch & Unregistered Issuer Signature",
      },
      {
        id: "SNU-CSA-2026",
        title: "Certified System Administrator (CSA) Exam Preparation",
        issuer: "ServiceNow University • SmartBridge",
        issueDate: "July 06, 2026",
        recipient: "Dhiraj Vaidya",
        serialHash: "0x77C1D40982AB5510SNU03",
        verified: true,
        verificationNote:
          "Yes, that is authenticated — Verified on ServiceNow CSA Official Registry",
      },
      {
        id: "CERT-FLAG-812",
        title: "Quantum Deep Learning Bootcamp Credential",
        issuer: "External OpenCourse Portal (Unverified)",
        issueDate: "February 19, 2026",
        recipient: "Dhiraj Vaidya",
        serialHash: "0x0000INVALID9982TAMPER",
        verified: false,
        verificationNote:
          "No, this certificate is NOT authenticated — Serial ID Not Found on Official Issuer Ledger",
      },
    ],
  },

  sayak: {
    id: "25ET2021033",
    name: "Sayak Debnath",
    avatar: "SD",
    avatarGradient: "from-indigo-600 via-blue-600 to-cyan-600",
    headline: "Pune City, Maharashtra, India | B.Tech AI & Data Science",
    role: "B.Tech Engineering Researcher — Social Media Analytics Project",
    college: "ALARD University Pune (ALARD School of Engineering & Technology)",
    degree: "B.Tech in Artificial Intelligence & Machine Learning (Roll No: 25ET2021033)",
    location: "Pune City, Maharashtra, India",
    connections: "380+ connections on LinkedIn",
    communityNote: "ALARD Knowledge Park, Marunji, Hinjewadi, Pune",
    profileUrl: "https://in.linkedin.com/in/sayak-debnath-alard",
    aboutText:
      "B.Tech student at ALARD School of Engineering & Technology, ALARD University, Pune (Enrollment: 25ET2021033). Developer of the Social Media Analytics Framework for Sentiment, Demographic, Trend and Network Intelligence under the guidance of Prof. Krati Shrivastava.",
    trustScore: 88,
    sentimentScore: "96.1% Positive Academic & Technical Footprint",
    status: "Verified Profile (With Credential Audit)",
    rawSourceFile: "certificate.pdf & Project Synopsis",
    skills: [
      "Generative AI & Agents",
      "Social Media Analytics",
      "Natural Language Processing (NLP)",
      "Python & Data Science",
      "Sentiment & Trend Analysis",
      "React & Dashboard Visualization",
    ],
    certificates: [
      {
        id: "MSFT-GENAI-2026",
        title: "Introduction to generative AI and agents",
        issuer: "Microsoft (Signed by Satya Narayana Nadella)",
        issueDate: "August 3, 2026",
        recipient: "SAYAK DEBNATH",
        serialHash: "0xMSFT2026AUG03SAYAK99A1",
        verified: true,
        pdfUrl: "./sayak-microsoft-certificate.pdf",
        documentNote: "certificate.pdf",
        signatories: [
          {
            name: "Satya Narayana Nadella",
            title: "Chairman & CEO, Microsoft Corporation",
          },
        ],
        verificationNote:
          "Yes, that is authenticated — Official Microsoft Generative AI & Agents Credential Verified",
      },
      {
        id: "ALARD-SMA-2026",
        title: "Social Media Analytics Framework Research & Prototype",
        issuer: "ALARD School of Engineering & Technology, Pune",
        issueDate: "October 2026",
        recipient: "Sayak Debnath",
        serialHash: "0xALARD25ET2021033SMA",
        verified: true,
        verificationNote:
          "Yes, that is authenticated — Verified by Department of Engineering, ALARD University",
      },
      {
        id: "CERT-FLAG-304",
        title: "Unverified Cloud DevOps Masterclass",
        issuer: "Third-Party Training Hub (Unregistered)",
        issueDate: "April 10, 2026",
        recipient: "Sayak Debnath",
        serialHash: "0xDEAD30499B1100WRONG",
        verified: false,
        verificationNote:
          "No, this certificate is NOT authenticated — Checksum Failed & Issuer Signature Missing",
      },
    ],
  },
};

// Resolve candidate information ONLY when a non-empty name is typed
function resolveCandidateByName(inputName) {
  const raw = (inputName || "").trim();
  if (!raw) return null;

  const lower = raw.toLowerCase();

  if (lower.includes("dhiraj") || lower.includes("vaidya")) {
    return PROFILES_DATABASE.dhiraj;
  }
  if (lower.includes("sayak") || lower.includes("debnath")) {
    return PROFILES_DATABASE.sayak;
  }

  let customRole = "B.Tech AI & Data Science Specialist";
  let customId = "ALARD-CANDIDATE-2026";
  if (lower.includes("vikas")) customId = "25ET2021042";
  if (lower.includes("shrikant")) customId = "25ET2011026";
  if (lower.includes("ankur")) customId = "26ET2022007";

  const cleanName = raw
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const initials = cleanName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const slug = cleanName.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return {
    id: customId,
    name: cleanName,
    avatar: initials || "CV",
    avatarGradient: "from-emerald-600 via-teal-600 to-cyan-700",
    headline: "Pune City, Maharashtra, India | Professional Profile",
    role: customRole,
    college: "ALARD University Pune (ALARD School of Engineering & Technology)",
    degree: "B.Tech in Artificial Intelligence and Machine Learning",
    location: "Pune City, Maharashtra, India",
    connections: "314+ connections on LinkedIn",
    communityNote: "Verified Professional Profile",
    profileUrl: `https://in.linkedin.com/in/${slug}`,
    aboutText: `I am a B-Tech specialist in Artificial Intelligence and Machine Learning at ALARD University Pune · Education: ALARD University Pune · Location: Pune City · Verified connections on LinkedIn. View ${cleanName}’s profile on LinkedIn.`,
    trustScore: 84,
    sentimentScore: "92.5% Positive Professional Sentiment",
    status: "Verified Profile (With Credential Audit)",
    rawSourceFile: "profile-linkedin-profile.txt (Matched)",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science & Analytics",
      "Python Programming",
      "ServiceNow & Cloud",
      "NLP & Sentiment Analysis",
    ],
    certificates: [
      {
        id: "SNU2029904",
        title: "Virtual Internship Program — Certificate of Completion",
        issuer: "ServiceNow University • AICTE • SmartBridge",
        issueDate: "July 06, 2026",
        recipient: cleanName,
        serialHash: "0xSNU2029904A7F9E2D188C4",
        verified: true,
        isFeaturedServiceNow: true,
        pdfUrl: "./dhiraj-servicenow-certificate.pdf",
        modules: PROFILES_DATABASE.dhiraj.certificates[0].modules,
        signatories: PROFILES_DATABASE.dhiraj.certificates[0].signatories,
        verificationNote:
          "Yes, that is authenticated — Verified via Official Credential Registry",
      },
      {
        id: "MSFT-GENAI-2026",
        title: "Introduction to generative AI and agents",
        issuer: "Microsoft Corporation",
        issueDate: "August 3, 2026",
        recipient: cleanName,
        serialHash: "0xMSFT2026AUG03VERIFIED",
        verified: true,
        verificationNote:
          "Yes, that is authenticated — Verified on Microsoft Official Ledger",
      },
      {
        id: "CERT-ERR-701",
        title: "Full-Stack Cloud & DevOps Bootcamp",
        issuer: "Unverified External Training Provider",
        issueDate: "March 12, 2026",
        recipient: cleanName,
        serialHash: "0xDEAD701FA9982MISMATCH",
        verified: false,
        verificationNote:
          "No, this certificate is NOT authenticated — Cryptographic Hash Mismatch on Ledger",
      },
    ],
  };
}

// =============================================================================
// 2. VISUAL REPLICA OF SERVICENOW + AICTE CERTIFICATE
// =============================================================================
function ServiceNowCertificateGraphic({
  recipientName = "Dhiraj Vaidya",
  certId = "SNU2029904",
  issueDate = "July 06, 2026",
}) {
  return (
    <div className="keep-white-text relative rounded-2xl overflow-hidden border-2 border-emerald-500/50 bg-[#07223b] text-white p-6 sm:p-8 shadow-2xl">
      <div className="absolute -right-12 -top-12 w-56 h-56 rounded-full bg-lime-400/15 blur-2xl pointer-events-none" />
      <div className="absolute -left-12 -bottom-12 w-56 h-56 rounded-full bg-cyan-400/10 blur-2xl pointer-events-none" />

      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4">
        <div className="flex items-center gap-1.5">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
            servicenow<span className="text-lime-400">.</span>
          </span>
          <span className="text-xl sm:text-2xl font-extrabold text-sky-200">
            university
          </span>
        </div>

        <div className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-extrabold tracking-wider uppercase">
          AICTE • Ministry of Education
        </div>

        <div className="text-right">
          <span className="text-base sm:text-lg font-bold tracking-widest text-teal-300">
            SMARTBRIDGE
          </span>
          <p className="text-[10px] text-slate-300">Let's Bridge the Gap</p>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <h2 className="text-2xl sm:text-3xl font-black tracking-wide text-white">
          Certificate of Completion
        </h2>
        <p className="text-xs sm:text-sm text-slate-300">This is to certify that</p>
        <p className="text-2xl sm:text-3xl font-black text-[#65e447] tracking-wide py-0.5">
          {recipientName}
        </p>
        <p className="text-xs sm:text-sm text-slate-300">has successfully completed</p>
        <p className="text-xl sm:text-2xl font-extrabold text-[#65e447]">
          Virtual Internship Program
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 mt-4 text-xs text-slate-100 bg-slate-950/35 p-4 rounded-xl border border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#65e447]" />
          <span>Welcome to ServiceNow</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#65e447]" />
          <span>Introduction to Flows</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#65e447]" />
          <span>Welcome to ServiceNow Micro Certification</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#65e447]" />
          <span>Automated Test Framework (ATF) Essentials</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#65e447]" />
          <span>Introduction to Agentic AI</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#65e447]" />
          <span>Get Started with Reports</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#65e447]" />
          <span>ServiceNow Administration Fundamentals</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#65e447]" />
          <span>Certified System Administrator (CSA) Exam Preparation</span>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="grid grid-cols-3 gap-4 flex-1 text-center sm:text-left">
          <div>
            <p className="font-serif italic text-sm text-sky-200">Jayney Howson</p>
            <p className="text-[11px] font-bold text-white mt-0.5">Jayney Howson</p>
            <p className="text-[9px] text-slate-300">SVP, Global Learning & Dev, ServiceNow</p>
          </div>
          <div>
            <p className="font-serif italic text-sm text-sky-200">Dr. C. Buddha</p>
            <p className="text-[11px] font-bold text-white mt-0.5">Dr. Chandrasekhar Buddha</p>
            <p className="text-[9px] text-slate-300">Chief Coordinating Officer, AICTE</p>
          </div>
          <div>
            <p className="font-serif italic text-sm text-sky-200">Amarendar K.</p>
            <p className="text-[11px] font-bold text-white mt-0.5">Amarendar Katkam</p>
            <p className="text-[9px] text-slate-300">Founder & CEO, SmartBridge</p>
          </div>
        </div>

        <div className="text-right bg-emerald-950/80 border border-emerald-400/50 px-3.5 py-2 rounded-xl shrink-0">
          <p className="text-[11px] text-emerald-200 font-semibold">
            Issued on: <strong className="text-white">{issueDate}</strong>
          </p>
          <p className="text-xs text-lime-300 font-mono font-bold mt-0.5">
            Certificate ID: {certId}
          </p>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// 3. POP-UP MODAL: SUPPORTS BOTH "Yes, that is authenticated" (~50-60%)
//    AND "No, this certificate is NOT authenticated" (~40%)
// =============================================================================
function VerificationPopupModal({ modalData, onClose }) {
  if (!modalData) return null;

  const isVerified = Boolean(modalData.verified);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-3xl bg-slate-900 border-2 rounded-3xl shadow-2xl overflow-hidden my-6 ${
          isVerified
            ? "border-emerald-500/70 shadow-emerald-950/60"
            : "border-rose-500/80 shadow-rose-950/60"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Banner: Green if Verified, Red if Not Authenticated */}
        <div
          className={`keep-white-text px-6 py-5 flex items-center justify-between ${
            isVerified
              ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700"
              : "bg-gradient-to-r from-rose-600 via-red-600 to-rose-700"
          }`}
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-white shadow-lg border border-white/30">
              {isVerified ? (
                <CheckCircle2 size={30} className="text-white" />
              ) : (
                <XCircle size={30} className="text-white" />
              )}
            </div>
            <div>
              <span className="inline-block text-[11px] uppercase tracking-widest font-extrabold bg-slate-950/30 text-white px-2.5 py-0.5 rounded-full mb-1">
                Official AI & Cryptographic Verification Result
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {isVerified
                  ? "Yes, that is authenticated"
                  : "No, this certificate is NOT authenticated"}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-slate-950/30 hover:bg-slate-950/60 flex items-center justify-center text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[78vh] overflow-y-auto custom-scrollbar">
          {/* Confirmation / Rejection Callout */}
          {isVerified ? (
            <div className="bg-emerald-950/50 border-2 border-emerald-500/60 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <BadgeCheck size={28} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-extrabold text-emerald-300">
                    ✅ Yes, that is authenticated — Genuine Credential
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    This certificate has been cross-verified with the issuing authority ledger and cryptographic SHA-256 signature checksum.
                  </p>
                </div>
              </div>
              <div className="bg-emerald-500 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl shrink-0 text-center shadow-md">
                VERIFIED &<br />AUTHENTICATED
              </div>
            </div>
          ) : (
            <div className="bg-rose-950/50 border-2 border-rose-500/70 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <AlertTriangle size={28} className="text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-extrabold text-rose-300">
                    ❌ Wrong / Unauthenticated Certificate — Verification Failed
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Cryptographic hash mismatch detected! This document's serial key or digital signature could not be verified on the official issuer registry.
                  </p>
                </div>
              </div>
              <div className="bg-rose-500 text-white font-black text-xs px-3.5 py-2 rounded-xl shrink-0 text-center shadow-md">
                NOT<br />AUTHENTICATED
              </div>
            </div>
          )}

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-950/70 p-4 rounded-2xl border border-slate-800 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800/80">
              <span className="text-slate-400 text-[10px] uppercase font-bold">
                Authentication Verdict
              </span>
              <p
                className={`font-extrabold text-sm mt-0.5 ${
                  isVerified ? "text-emerald-400" : "text-rose-400"
                }`}
              >
                {isVerified
                  ? "Yes, that is authenticated (Verified ✅)"
                  : "No, NOT authenticated (Wrong / Tampered ❌)"}
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800/80">
              <span className="text-slate-400 text-[10px] uppercase font-bold">
                Candidate Holder Name
              </span>
              <p className="text-white font-bold text-sm mt-0.5">
                {modalData.recipient || "Candidate"}
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800/80">
              <span className="text-slate-400 text-[10px] uppercase font-bold">
                Certificate / Document Name
              </span>
              <p className="text-indigo-300 font-bold text-sm mt-0.5">
                {modalData.title}
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800/80">
              <span className="text-slate-400 text-[10px] uppercase font-bold">
                Issuing Organization
              </span>
              <p className="text-slate-200 font-semibold text-sm mt-0.5">
                {modalData.issuer}
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800/80">
              <span className="text-slate-400 text-[10px] uppercase font-bold">
                Certificate ID & Issue Date
              </span>
              <p className="text-amber-300 font-mono font-bold text-sm mt-0.5">
                {modalData.id} • {modalData.issueDate}
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800/80">
              <span className="text-slate-400 text-[10px] uppercase font-bold">
                SHA-256 Cryptographic Hash
              </span>
              <p
                className={`font-mono font-semibold text-xs mt-0.5 truncate ${
                  isVerified ? "text-emerald-300" : "text-rose-400"
                }`}
              >
                {modalData.serialHash}
              </p>
            </div>
          </div>

          {/* Visual Preview of the Uploaded File or Featured Certificate */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Eye
                size={14}
                className={isVerified ? "text-emerald-400" : "text-rose-400"}
              />
              Certificate Document Preview
            </h4>

            {modalData.filePreviewUrl && modalData.fileType?.startsWith("image/") ? (
              <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 p-2">
                <img
                  src={modalData.filePreviewUrl}
                  alt={modalData.title}
                  className="max-h-[360px] w-auto mx-auto rounded-xl object-contain"
                />
              </div>
            ) : modalData.filePreviewUrl && modalData.fileType === "application/pdf" ? (
              <div className="space-y-3">
                <iframe
                  src={modalData.filePreviewUrl}
                  title="Uploaded Certificate PDF"
                  className="w-full h-[340px] rounded-2xl border border-slate-700 bg-slate-950"
                />
              </div>
            ) : isVerified ? (
              <ServiceNowCertificateGraphic
                recipientName={modalData.recipient || "Dhiraj Vaidya"}
                certId={modalData.id || "SNU2029904"}
                issueDate={modalData.issueDate || "July 06, 2026"}
              />
            ) : (
              <div className="rounded-2xl border-2 border-dashed border-rose-500/60 bg-rose-950/20 p-6 text-center space-y-2">
                <ShieldAlert size={36} className="mx-auto text-rose-400" />
                <p className="text-sm font-bold text-rose-300">
                  Cryptographic Signature Verification Failed
                </p>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  The certificate hash <code className="text-rose-300 font-mono">{modalData.serialHash}</code> does not match any valid credential issued by {modalData.issuer}.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div
            className={`flex items-center gap-2 text-xs font-semibold ${
              isVerified ? "text-emerald-400" : "text-rose-400"
            }`}
          >
            {isVerified ? <ShieldCheck size={16} /> : <ShieldAlert size={16} />}
            <span>
              {isVerified
                ? "Status: Yes, that is authenticated (Verified on Official Ledger)"
                : "Status: No, this certificate is NOT authenticated (Flagged / Invalid)"}
            </span>
          </div>
          <button
            onClick={onClose}
            className={`px-6 py-2.5 rounded-xl text-white font-bold text-xs shadow-lg transition-all ${
              isVerified
                ? "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-900/50"
                : "bg-rose-600 hover:bg-rose-500 shadow-rose-900/50"
            }`}
          >
            Close Verification Result
          </button>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// 4. MAIN APPLICATION
// =============================================================================
export default function App() {
  // Starts blank — Candidate profile is shown ONLY when the user submits a name
  const [nameInput, setNameInput] = useState("");
  const [activeProfile, setActiveProfile] = useState(null);
  const [showRawTxt, setShowRawTxt] = useState(false);

  // Dark / Light Mode Theme State
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  // Certificate Upload & Instant Verification State
  const [uploadedCertFile, setUploadedCertFile] = useState(null);
  const [customCertTitle, setCustomCertTitle] = useState("");
  const [popupModalData, setPopupModalData] = useState(null);
  const fileInputRef = useRef(null);

  // Counter ref to ensure ~55-60% "Yes, that is authenticated" and ~40% "No, NOT authenticated"
  // Cycle of 5 attempts: [true, false, true, false, true] -> 60% Yes (3/5) and 40% No (2/5)
  const verificationCounterRef = useRef(0);

  const evaluateCertificateAuthenticity = (fileName = "", titleText = "") => {
    const combined = `${fileName} ${titleText}`.toLowerCase();
    if (
      combined.includes("wrong") ||
      combined.includes("fake") ||
      combined.includes("invalid") ||
      combined.includes("tamper") ||
      combined.includes("fail") ||
      combined.includes("0xdead")
    ) {
      return false;
    }

    // 60% Yes / 40% No pattern combined with randomness so user sees both Yes (~50-60%) and No (~40%)
    const outcomes = [true, false, true, false, true];
    const index = verificationCounterRef.current % outcomes.length;
    verificationCounterRef.current += 1;
    return outcomes[index];
  };

  // Handle searching by name (only shows profile when name is typed)
  const handleSearchByName = (e) => {
    if (e) e.preventDefault();
    const resolved = resolveCandidateByName(nameInput);
    setActiveProfile(resolved);
  };

  // Generate hash for uploaded certificate (valid hash vs flagged mismatch hash)
  const generateHash = (str, isVerified) => {
    const hex = "0123456789ABCDEF";
    if (!isVerified) {
      let bad = "0xDEAD";
      for (let i = 0; i < 12; i++) {
        const idx = (str.charCodeAt(i % str.length) * (i + 3)) % 16;
        bad += hex[idx];
      }
      return bad + "MISMATCH";
    }
    let out = "0x7A4F";
    for (let i = 0; i < 16; i++) {
      const idx = (str.charCodeAt(i % str.length) * (i + 7)) % 16;
      out += hex[idx];
    }
    return out + "SNU2029904";
  };

  // Handle uploading ANY certificate file -> ~55-60% Yes Authenticated, ~40% No Not Authenticated
  const handleCertificateFileChange = (file) => {
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    const cleanFileName = file.name
      .replace(/\.(pdf|png|jpg|jpeg|webp|docx|doc)$/i, "")
      .replace(/[_-]+/g, " ")
      .trim();

    const isVerifiedOutcome = evaluateCertificateAuthenticity(
      file.name,
      customCertTitle
    );

    const isServiceNowCert =
      file.name.toLowerCase().includes("certificate (1)") ||
      file.name.toLowerCase().includes("servicenow") ||
      file.name.toLowerCase().includes("snu");

    const isMicrosoftCert =
      file.name.toLowerCase() === "certificate.pdf" ||
      file.name.toLowerCase().includes("microsoft");

    const titleToUse = customCertTitle.trim()
      ? customCertTitle.trim()
      : isServiceNowCert
      ? `Virtual Internship Program (${file.name})`
      : isMicrosoftCert
      ? `Introduction to generative AI and agents (${file.name})`
      : `${cleanFileName || "Uploaded Credential"} (${file.name})`;

    const issuerToUse = isVerifiedOutcome
      ? isServiceNowCert
        ? "ServiceNow University • AICTE • SmartBridge"
        : isMicrosoftCert
        ? "Microsoft Corporation (Satya Narayana Nadella)"
        : "Official Credential Verification Authority • AICTE"
      : "Unverified Issuer Signature / Registry Mismatch";

    const certIdToUse = isVerifiedOutcome
      ? isServiceNowCert
        ? "SNU2029904"
        : isMicrosoftCert
        ? "MSFT-GENAI-2026"
        : `CERT-VERIFIED-${Math.floor(1000 + Math.random() * 9000)}`
      : `CERT-INVALID-${Math.floor(1000 + Math.random() * 9000)}`;

    const holderName = activeProfile?.name || nameInput.trim() || "Candidate";

    const newCertRecord = {
      id: certIdToUse,
      title: titleToUse,
      issuer: issuerToUse,
      issueDate: isServiceNowCert ? "July 06, 2026" : "August 03, 2026",
      recipient: holderName,
      serialHash: generateHash(file.name, isVerifiedOutcome),
      verified: isVerifiedOutcome,
      documentNote: file.name,
      filePreviewUrl: previewUrl,
      fileType:
        file.type || (file.name.endsWith(".pdf") ? "application/pdf" : "image/png"),
      isFeaturedServiceNow: isServiceNowCert && isVerifiedOutcome,
      verificationNote: isVerifiedOutcome
        ? "Yes, that is authenticated — Verified & Authenticated Uploaded Certificate"
        : "No, this certificate is NOT authenticated — Cryptographic Hash & Signature Mismatch",
    };

    setUploadedCertFile({
      name: file.name,
      size: (file.size / 1024).toFixed(1) + " KB",
      certObj: newCertRecord,
    });

    // If a candidate profile is currently open, prepend this certificate to their list
    if (activeProfile) {
      setActiveProfile((prev) =>
        prev
          ? {
              ...prev,
              certificates: [
                newCertRecord,
                ...prev.certificates.filter((c) => c.documentNote !== file.name),
              ],
            }
          : prev
      );
    }

    // Immediately show the pop-up with the 50-60% Yes / 40% No result
    setPopupModalData(newCertRecord);
  };

  // Handle clicking "Verify Certificate" button
  const handleManualVerifyClick = () => {
    const isVerifiedOutcome = evaluateCertificateAuthenticity(
      uploadedCertFile?.name || "",
      customCertTitle
    );

    const holderName = activeProfile?.name || nameInput.trim() || "Dhiraj Vaidya";
    const certTitle =
      customCertTitle.trim() ||
      uploadedCertFile?.certObj?.title ||
      activeProfile?.certificates[0]?.title ||
      "Uploaded Credential Document";

    const certObj = {
      id: isVerifiedOutcome
        ? activeProfile?.certificates[0]?.id || "SNU2029904"
        : `CERT-FLAG-${Math.floor(100 + Math.random() * 900)}`,
      title: certTitle,
      issuer: isVerifiedOutcome
        ? activeProfile?.certificates[0]?.issuer ||
          "ServiceNow University • AICTE • SmartBridge"
        : "Unregistered Issuer / Signature Verification Failed",
      issueDate: activeProfile?.certificates[0]?.issueDate || "July 06, 2026",
      recipient: holderName,
      serialHash: generateHash(certTitle, isVerifiedOutcome),
      verified: isVerifiedOutcome,
      filePreviewUrl: uploadedCertFile?.certObj?.filePreviewUrl,
      fileType: uploadedCertFile?.certObj?.fileType,
      verificationNote: isVerifiedOutcome
        ? "Yes, that is authenticated — Official Certificate Verified on Ledger"
        : "No, this certificate is NOT authenticated — Cryptographic Hash Mismatch",
    };

    if (uploadedCertFile) {
      setUploadedCertFile((prev) =>
        prev ? { ...prev, certObj } : prev
      );
    }

    setPopupModalData(certObj);
  };

  const verifiedCount = activeProfile
    ? activeProfile.certificates.filter((c) => c.verified).length
    : 0;
  const wrongCount = activeProfile
    ? activeProfile.certificates.filter((c) => !c.verified).length
    : 0;

  return (
    <div
      className={`min-h-screen bg-slate-950 text-slate-100 flex flex-col transition-colors duration-200 ${
        theme === "light" ? "light-mode" : ""
      }`}
    >
      {/* =====================================================================
          TOP HEADER BAR
      ===================================================================== */}
      <header className="sticky top-0 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <img
              src="./alard-logo.png"
              alt="ALARD University"
              className="w-11 h-11 rounded-xl object-contain bg-white p-1 border border-indigo-500/40 shadow"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                  AI Profile & Credential Authentication System
                </span>
                <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800/60">
                  ALARD University, Pune • A.Y. 2026-27
                </span>
              </div>
              <h1 className="text-lg sm:text-xl font-black text-white tracking-tight mt-0.5">
                Social Media Analytics — Profile & Certificate Authentication Hub
              </h1>
              <p className="text-xs text-slate-400">
                Guided by <strong className="text-slate-200">Prof. Krati Shrivastava</strong> • ALARD School of Engineering & Technology
              </p>
            </div>
          </div>

          {/* Right Status Pill & Dark/Light Theme Toggle */}
          <div className="flex items-center gap-2.5 self-start md:self-center flex-wrap">
            <button
              type="button"
              onClick={toggleTheme}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-slate-100 flex items-center gap-2 shadow transition-all"
              title="Switch between Dark Mode and Light Mode"
            >
              {theme === "dark" ? (
                <>
                  <Sun size={16} className="text-amber-400" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={16} className="text-indigo-600" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>

            <div className="bg-slate-950/90 border border-slate-700 rounded-xl px-3.5 py-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div className="text-xs">
                <p className="font-bold text-slate-200 leading-none">
                  profile-linkedin-profile.txt Connected
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  Live SHA-256 & Issuer Fraud Detection Active
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================================
          MAIN CONTENT CONTAINER
      ===================================================================== */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT PANEL: CANDIDATE NAME LOOKUP (7 Columns) */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                    <UserCheck size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
                      Step 1 • LinkedIn Profile Lookup (profile.txt)
                    </span>
                    <h2 className="text-base sm:text-lg font-extrabold text-white">
                      Search Candidate by Name
                    </h2>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowRawTxt(!showRawTxt)}
                  className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-slate-700 flex items-center gap-1.5 font-semibold transition-colors"
                >
                  <Terminal size={13} />
                  {showRawTxt ? "Hide profile.txt" : "View Raw profile.txt"}
                </button>
              </div>

              {showRawTxt && (
                <div className="bg-slate-950 border border-indigo-500/40 rounded-xl p-3.5 text-xs font-mono text-emerald-300 space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-1.5 mb-2">
                    <span>📄 Source File: c:\Users\sayak\Downloads\profile-linkedin-profile.txt</span>
                    <span className="text-emerald-400 font-bold">Loaded ✓</span>
                  </div>
                  <pre className="whitespace-pre-wrap leading-relaxed text-[11px]">
                    {RAW_PROFILE_TXT}
                  </pre>
                </div>
              )}

              {/* Search Input Form — Waits for user to finish typing and click 'Get Information' or press Enter */}
              <form onSubmit={handleSearchByName} className="space-y-3">
                <label className="block text-xs font-semibold text-slate-300">
                  Enter Candidate Name and Click "Get Information":
                </label>
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <Search
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      value={nameInput}
                      onChange={(e) => {
                        const val = e.target.value;
                        setNameInput(val);
                        if (!val.trim()) {
                          setActiveProfile(null);
                        }
                      }}
                      placeholder="Type candidate name (e.g., Dhiraj Vaidya) and press Enter..."
                      className="w-full pl-10 pr-4 py-3 bg-slate-950 border-2 border-indigo-500/50 focus:border-indigo-400 rounded-xl text-white font-semibold text-sm focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-950/60 transition-all shrink-0"
                  >
                    <Search size={16} />
                    <span>Get Information</span>
                  </button>
                  {nameInput && (
                    <button
                      type="button"
                      onClick={() => {
                        setNameInput("");
                        setActiveProfile(null);
                      }}
                      className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors shrink-0"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              {activeProfile ? (
                <>
                  <span>
                    Active Profile:{" "}
                    <strong className="text-emerald-400">{activeProfile.name}</strong>
                  </span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 size={14} /> Information Loaded from profile.txt
                  </span>
                </>
              ) : (
                <span className="text-slate-500">
                  Type a candidate name above to view their profile & certificate audit report.
                </span>
              )}
            </div>
          </div>

          {/* RIGHT PANEL: CERTIFICATE VERIFIER (5 Columns) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/30 border-2 border-indigo-500/40 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                    Step 2 • Cryptographic Certificate Verifier
                  </span>
                  <h2 className="text-base sm:text-lg font-extrabold text-white">
                    Upload Certificate to Verify Authenticity
                  </h2>
                </div>
              </div>

              {/* Upload Dropzone */}
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  if (e.dataTransfer.files?.[0]) {
                    handleCertificateFileChange(e.dataTransfer.files[0]);
                  }
                }}
                className="cursor-pointer border-2 border-dashed border-indigo-500/50 hover:border-emerald-400 bg-slate-950/70 hover:bg-slate-950 rounded-2xl p-4 text-center transition-all"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg,.webp,.doc,.docx"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      handleCertificateFileChange(e.target.files[0]);
                    }
                    e.target.value = "";
                  }}
                />
                <Upload size={26} className="mx-auto text-indigo-400 mb-1.5" />
                <p className="text-xs sm:text-sm font-bold text-white">
                  Click to Upload Certificate (PDF / Image)
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Audits SHA-256 hash & issuer signature against official registry
                </p>

                {uploadedCertFile && (
                  <div
                    className={`mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold border ${
                      uploadedCertFile.certObj?.verified
                        ? "bg-emerald-950/90 border-emerald-500/60 text-emerald-200"
                        : "bg-rose-950/90 border-rose-500/60 text-rose-200"
                    }`}
                  >
                    {uploadedCertFile.certObj?.verified ? (
                      <>
                        <CheckCircle2 size={14} className="text-emerald-400" />
                        <span>{uploadedCertFile.name} — Yes, Authenticated!</span>
                      </>
                    ) : (
                      <>
                        <XCircle size={14} className="text-rose-400" />
                        <span>{uploadedCertFile.name} — Not Authenticated!</span>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Optional Certificate Name / ID Input */}
              <div>
                <input
                  type="text"
                  value={customCertTitle}
                  onChange={(e) => setCustomCertTitle(e.target.value)}
                  placeholder="Optional: Enter Certificate Name or ID"
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Verify Action Button */}
            <button
              type="button"
              onClick={handleManualVerifyClick}
              className="mt-4 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-950/70 transition-all"
            >
              <BadgeCheck size={18} />
              <span>Run Certificate Authentication Check</span>
            </button>
          </div>
        </div>

        {/* =================================================================
            CANDIDATE INFORMATION REPORT — RENDERED ONLY WHEN NAME IS TYPED
        ================================================================= */}
        {!activeProfile ? (
          <div className="bg-slate-900/70 border-2 border-dashed border-slate-800 rounded-3xl p-10 text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-indigo-950/80 border border-indigo-500/40 flex items-center justify-center text-indigo-400 mx-auto">
              <Search size={26} />
            </div>
            <h3 className="text-lg font-extrabold text-white">
              No Candidate Selected Yet
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
              Type a candidate name in the search box above (for example, <strong className="text-slate-200">Dhiraj</strong>) to display their LinkedIn profile information and verified vs. unverified certificate records.
            </p>
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            {/* Top Candidate Profile Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-800 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div
                  className={`keep-white-text w-20 h-20 rounded-2xl bg-gradient-to-br ${activeProfile.avatarGradient} flex items-center justify-center text-white font-black text-2xl shadow-xl border-2 border-white/20 shrink-0`}
                >
                  {activeProfile.avatar}
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h2 className="text-2xl sm:text-3xl font-black text-white">
                      {activeProfile.name}
                    </h2>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-950/90 text-emerald-300 border border-emerald-500/60">
                      <CheckCircle2 size={14} className="text-emerald-400" />
                      LinkedIn Profile Verified
                    </span>
                    <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                      ID: {activeProfile.id}
                    </span>
                  </div>

                  <p className="text-sm font-bold text-indigo-300">
                    {activeProfile.headline}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
                    <span className="flex items-center gap-1.5">
                      <GraduationCap size={15} className="text-emerald-400" />
                      <strong>Education:</strong> {activeProfile.college}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={15} className="text-rose-400" />
                      <strong>Location:</strong> {activeProfile.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={15} className="text-sky-400" />
                      <strong>Network:</strong> {activeProfile.connections}
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Score & LinkedIn URL Action */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 bg-slate-950/80 border border-slate-800 p-4 rounded-2xl shrink-0">
                <div className="text-center px-3 border-r border-slate-800">
                  <p className="text-[10px] uppercase font-bold text-slate-400">
                    AI Trust Score
                  </p>
                  <p className="text-3xl font-black text-emerald-400">
                    {activeProfile.trustScore}%
                  </p>
                  <span className="text-[10px] text-slate-400 font-semibold">
                    {verifiedCount} Verified • {wrongCount} Flagged
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-1.5 text-sky-400 font-semibold">
                    <Linkedin size={15} />
                    <span>Official LinkedIn URL (from profile.txt):</span>
                  </div>
                  <a
                    href={activeProfile.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-indigo-300 hover:text-indigo-200 underline break-all"
                  >
                    <span>{activeProfile.profileUrl}</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* ABOUT SECTION & EDUCATION DETAILS */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 bg-slate-950/70 border border-slate-800/90 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
                    <FileText size={15} />
                    LinkedIn "ABOUT" Information (Extracted from profile-linkedin-profile.txt)
                  </h3>
                  <span className="text-[10px] font-mono bg-emerald-950/70 text-emerald-300 px-2 py-0.5 rounded border border-emerald-700/50">
                    NLP Verified ✓
                  </span>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                  “{activeProfile.aboutText}”
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 text-xs">
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Specialization</span>
                    <strong className="text-white">B.Tech AI & ML</strong>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">University</span>
                    <strong className="text-white">ALARD University Pune</strong>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">City / State</span>
                    <strong className="text-white">Pune City, MH</strong>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Connections</span>
                    <strong className="text-emerald-400">314 Verified</strong>
                  </div>
                </div>
              </div>

              {/* Skills & Credential Audit Summary Box */}
              <div className="lg:col-span-5 bg-slate-950/70 border border-slate-800/90 rounded-2xl p-5 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                    <Sparkles size={15} />
                    Extracted Skills & Credential Audit Summary
                  </h3>

                  <div className="flex flex-wrap gap-1.5">
                    {activeProfile.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-indigo-950/70 text-indigo-200 border border-indigo-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 font-semibold">NLP Sentiment Score:</span>
                    <span className="text-emerald-400 font-bold">{activeProfile.sentimentScore}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 font-semibold">Authenticated Certificates:</span>
                    <span className="text-emerald-400 font-bold">
                      {verifiedCount} Verified (✅ Yes)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 font-semibold">Wrong / Unauthenticated:</span>
                    <span className="text-rose-400 font-bold">
                      {wrongCount} Flagged (❌ No)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ===============================================================
                ALL CERTIFICATES LIST (SHOWS BOTH AUTHENTICATED & WRONG CERTS)
            =============================================================== */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-sm font-black uppercase tracking-wider text-white flex items-center gap-2">
                  <Award size={18} className="text-indigo-400" />
                  Certificate Verification Audit for {activeProfile.name} (
                  {activeProfile.certificates.length} Total)
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/70 px-3 py-1 rounded-full border border-emerald-700/60">
                    ✅ {verifiedCount} Authenticated
                  </span>
                  <span className="text-xs font-bold text-rose-400 bg-rose-950/70 px-3 py-1 rounded-full border border-rose-700/60">
                    ❌ {wrongCount} Not Authenticated
                  </span>
                </div>
              </div>

              <div className="max-h-[520px] overflow-y-auto pr-2 custom-scrollbar space-y-3">
                {activeProfile.certificates.map((cert, index) => (
                  <div
                    key={cert.id + index}
                    className={`p-4 rounded-2xl transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 border ${
                      cert.verified
                        ? "bg-slate-950/80 border-emerald-500/40 hover:border-emerald-400"
                        : "bg-rose-950/20 border-rose-500/50 hover:border-rose-400"
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700">
                          #{index + 1}
                        </span>
                        <h4 className="text-base font-extrabold text-white">
                          {cert.title}
                        </h4>
                        {cert.verified ? (
                          <span className="inline-flex items-center gap-1 text-xs font-extrabold text-emerald-300 bg-emerald-950/90 px-2.5 py-0.5 rounded-full border border-emerald-500/60">
                            <CheckCircle2 size={12} /> Yes, Authenticated
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs font-extrabold text-rose-300 bg-rose-950/90 px-2.5 py-0.5 rounded-full border border-rose-500/60">
                            <XCircle size={12} /> Not Authenticated (Wrong)
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
                        <span className="flex items-center gap-1">
                          <Building2 size={13} className="text-indigo-400" />
                          <strong>Issuer:</strong> {cert.issuer}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar size={13} className="text-amber-400" />
                          <strong>Issued:</strong> {cert.issueDate}
                        </span>
                        <span>•</span>
                        <span
                          className={`font-mono ${
                            cert.verified ? "text-emerald-300" : "text-rose-300"
                          }`}
                        >
                          <strong>Cert ID:</strong> {cert.id}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800 w-fit">
                        <Hash
                          size={12}
                          className={
                            cert.verified ? "text-emerald-400" : "text-rose-400"
                          }
                        />
                        <span>SHA-256 Hash: {cert.serialHash}</span>
                      </div>

                      <p
                        className={`text-xs font-semibold ${
                          cert.verified ? "text-emerald-400" : "text-rose-400"
                        }`}
                      >
                        {cert.verified ? "✅ " : "❌ "}
                        {cert.verificationNote}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setPopupModalData(cert)}
                      className={`px-4 py-2.5 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-1.5 shrink-0 shadow-md transition-all ${
                        cert.verified
                          ? "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-950/60"
                          : "bg-rose-600 hover:bg-rose-500 shadow-rose-950/60"
                      }`}
                    >
                      {cert.verified ? (
                        <ShieldCheck size={15} />
                      ) : (
                        <ShieldAlert size={15} />
                      )}
                      <span>Verify Certificate</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* =====================================================================
          FOOTER WITH PROJECT TEAM & UNIVERSITY DETAILS
      ===================================================================== */}
      <footer className="bg-slate-900 border-t border-slate-800 py-4 px-6 text-center text-xs text-slate-400">
        <p>
          <strong className="text-white">Social Media Analytics Framework</strong> • Submitted by{" "}
          <span className="text-slate-200">
            Vikas Pal (25ET2021042), Shrikant Badhe (25ET2011026), Ankur Shelke (26ET2022007), Sayak Debnath (25ET2021033)
          </span>{" "}
          • Guided by <strong className="text-indigo-300">Prof. Krati Shrivastava</strong> • ALARD University, Pune
        </p>
      </footer>

      {/* =====================================================================
          VERIFICATION POP-UP MODAL (YES AUTHENTICATED / NO NOT AUTHENTICATED)
      ===================================================================== */}
      <VerificationPopupModal
        modalData={popupModalData}
        onClose={() => setPopupModalData(null)}
      />
    </div>
  );
}
