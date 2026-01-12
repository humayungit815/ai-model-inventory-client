import React from "react";
import {
    Users,
    Zap,
    Activity,
    ArrowUpRight,
    Clock,
    Layers,
} from "lucide-react";
// Recharts ইম্পোর্ট করুন
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Overview = () => {
    // চার্টের জন্য ডাইনামিক ডাটা
    const chartData = [
        { name: 'Jan 01', traffic: 400 },
        { name: 'Jan 03', traffic: 700 },
        { name: 'Jan 05', traffic: 500 },
        { name: 'Jan 07', traffic: 900 },
        { name: 'Jan 09', traffic: 600 },
        { name: 'Jan 11', traffic: 800 },
        { name: 'Jan 12', traffic: 950 },
    ];

    const quickStats = [
        { id: 1, title: "Total Requests", value: "1.2M", change: "+14.5%", icon: <Zap size={20} />, color: "bg-blue-500" },
        { id: 2, title: "Active Users", value: "24.8K", change: "+12.2%", icon: <Users size={20} />, color: "bg-[#F087B1]" },
        { id: 3, title: "Uptime", value: "99.98%", change: "Stable", icon: <Activity size={20} />, color: "bg-green-500" },
        { id: 4, title: "Total Models", value: "142", change: "+2 New", icon: <Layers size={20} />, color: "bg-orange-500" },
    ];

    const recentModels = [
        { name: "GPT-NeoX Lab", status: "Active", accuracy: "98.2%", date: "2 mins ago" },
        { name: "Llama-3 Fine-tune", status: "Deploying", accuracy: "94.5%", date: "15 mins ago" },
        { name: "Stable Diffusion V4", status: "Offline", accuracy: "0%", date: "1 hour ago" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">System Overview</h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">Real-time performance and model status.</p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full">
                        <Clock size={14} /> 2026-01-12
                    </span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickStats.map(stat => (
                    <div key={stat.id} className="bg-white dark:bg-slate-900 p-6 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm group hover:border-[#F087B1]/30 transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-2xl text-white ${stat.color} shadow-lg opacity-80 group-hover:opacity-100 transition-opacity`}>{stat.icon}</div>
                            <span className="text-[10px] font-black text-green-500 bg-green-50 dark:bg-green-500/10 px-2 py-1 rounded-lg">{stat.change}</span>
                        </div>
                        <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{stat.title}</h3>
                        <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* --- REAL RECHARTS AREA --- */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-[40px] border border-slate-100 dark:border-slate-800 p-8 shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-lg font-black tracking-tight text-slate-900 dark:text-white">Network Traffic</h3>
                        <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-xs font-bold px-4 py-2 outline-none dark:text-slate-300 cursor-pointer">
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                        </select>
                    </div>
                    
                    {/* Recharts Container */}
                    <div className="h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#F087B1" stopOpacity={0.3}/>
                                        <stop offset="95%" stopColor="#F087B1" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" opacity={0.5} />
                                <XAxis 
                                    dataKey="name" 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{fontSize: 10, fontWeight: 700, fill: '#94A3B8'}} 
                                    dy={10}
                                />
                                <YAxis 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{fontSize: 10, fontWeight: 700, fill: '#94A3B8'}} 
                                />
                                <Tooltip 
                                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '12px' }}
                                />
                                <Area 
                                    type="monotone" 
                                    dataKey="traffic" 
                                    stroke="#F087B1" 
                                    strokeWidth={4}
                                    fillOpacity={1} 
                                    fill="url(#colorTraffic)" 
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Models List */}
                <div className="bg-white dark:bg-slate-900 rounded-[40px] border border-slate-100 dark:border-slate-800 p-8 shadow-sm">
                    <h3 className="text-lg font-black tracking-tight text-slate-900 dark:text-white mb-6">Recent Models</h3>
                    <div className="space-y-6">
                        {recentModels.map((model, i) => (
                            <div key={i} className="flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-[#F087B1] transition-colors">
                                        <Layers size={18} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-none mb-1">{model.name}</h4>
                                        <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter">{model.date}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-black text-slate-900 dark:text-white">{model.accuracy}</p>
                                    <span className={`text-[9px] font-black uppercase ${model.status === "Offline" ? "text-red-500" : "text-green-500"}`}>{model.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-8 py-3 bg-slate-50 dark:bg-slate-800 hover:bg-[#F087B1]/10 hover:text-[#F087B1] transition-all rounded-2xl text-xs font-black uppercase tracking-widest text-slate-500 flex items-center justify-center gap-2">
                        Full Inventory <ArrowUpRight size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Overview;