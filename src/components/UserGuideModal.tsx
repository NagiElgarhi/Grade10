import React, { useState } from 'react';
import { X, BookOpen, Code, Layers, Video, Smartphone, CheckCircle, ArrowLeftRight } from 'lucide-react';

interface UserGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UserGuideModal({ isOpen, onClose }: UserGuideModalProps) {
  const [activeTab, setActiveTab] = useState<'developer' | 'user'>('developer');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        dir="rtl"
        className="relative w-full max-w-4xl max-h-[85vh] bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300 text-right"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-800 bg-neutral-950/50">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-teal-400" />
            <div>
              <h2 className="text-xl font-bold text-white">دليل الاستخدام والبرمجة الشامل</h2>
              <p className="text-xs text-neutral-400 mt-1">مرجع كامل لكيفية استخدام وتطوير تطبيق "قناة أولى ثانوى"</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            title="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-neutral-800 bg-neutral-950/20 p-2 gap-2">
          <button
            onClick={() => setActiveTab('developer')}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'developer' 
                ? 'bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-lg shadow-teal-500/10' 
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
            }`}
          >
            <Code className="w-5 h-5" />
            <span>دليل برمجة وتطوير التطبيق</span>
          </button>
          <button
            onClick={() => setActiveTab('user')}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'user' 
                ? 'bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-lg shadow-teal-500/10' 
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
            }`}
          >
            <Smartphone className="w-5 h-5" />
            <span>دليل الاستخدام والتشغيل</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-neutral-900/50 space-y-6">
          {activeTab === 'developer' ? (
            <div className="space-y-6 animate-in fade-in duration-200">
              
              {/* Introduction */}
              <div className="p-4 rounded-2xl bg-teal-500/5 border border-teal-500/10">
                <h3 className="text-lg font-semibold text-teal-400 mb-2 flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  مقدمة عن المعمارية البرمجية للبرنامج
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  تم بناء هذا التطبيق ليعمل كـ <strong className="text-white">تطبيق ويب متكامل (Full-stack Application)</strong> فائق السرعة والأداء، مخصص لبث الدروس التعليمية لطلاب الصف الأول الثانوي على هيئة بث مستمر متزامن (Simulated Live Broadcasting).
                </p>
              </div>

              {/* Server Stack */}
              <div className="space-y-3">
                <h4 className="text-base font-bold text-white border-r-4 border-indigo-500 pr-3">1. بيئة العمل والمخدم الخلفي (Express Backend)</h4>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  يتم تشغيل المخدم باستخدام <code className="text-indigo-300 font-mono bg-neutral-950 px-1.5 py-0.5 rounded text-xs">Express.js</code> و <code className="text-indigo-300 font-mono bg-neutral-950 px-1.5 py-0.5 rounded text-xs">TypeScript</code> في ملف <code className="text-indigo-300 font-mono bg-neutral-950 px-1.5 py-0.5 rounded text-xs">server.ts</code>.
                </p>
                <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 text-xs font-mono text-neutral-300 overflow-x-auto space-y-2">
                  <div className="text-teal-400">// المبدأ الأساسي لمحاكاة البث المباشر المستمر:</div>
                  <div>عند طلب القنوات، يقوم المخدم بحساب موضع الفيديو النشط بناءً على فرق الوقت:</div>
                  <div className="text-indigo-400">const elapsedSeconds = (Date.now() - startTime) / 1000;</div>
                  <div>ومن ثم تحديد الفيديو النشط والوقت المنقضي بدقة ليعمل لجميع الطلاب بالتزامن!</div>
                </div>
                <ul className="list-disc pr-5 text-neutral-300 text-xs space-y-1.5">
                  <li>يتم حفظ القنوات والفيديوهات وجدول التشغيل بشكل دائم في ملف <code className="text-teal-400 font-mono">data.json</code> على القرص لضمان عدم ضياع البيانات عند إعادة تشغيل المخدم.</li>
                  <li>يوفر المخدم واجهة برمجية <code className="text-teal-400 font-mono">/api/channels</code> لإحضار القنوات والجدول والتحقق من كلمة المرور الخاصة بالمسؤولين.</li>
                </ul>
              </div>

              {/* Player Synchronization */}
              <div className="space-y-3">
                <h4 className="text-base font-bold text-white border-r-4 border-indigo-500 pr-3">2. مشغل البث الذكي (YouTube Iframe Sync Player)</h4>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  تمت برمجة المشغل في مكون <code className="text-teal-300 font-mono bg-neutral-950 px-1.5 py-0.5 rounded text-xs">Player.tsx</code> وهو يعتمد على واجهة <code className="text-teal-300 font-mono bg-neutral-950 px-1.5 py-0.5 rounded text-xs">YouTube Iframe API</code> الرسمية.
                </p>
                <ul className="list-disc pr-5 text-neutral-300 text-xs space-y-1.5">
                  <li><strong>التحميل الآمن:</strong> يتم تحميل الـ SDK الخاص بيوتيوب ديناميكياً مع تلافي الأخطاء ومراقبة واجهة API بحلقة تحقق (Interval) لضمان جاهزية المشغل قبل استدعائه.</li>
                  <li><strong>التزامن التلقائي:</strong> عند تشغيل القناة، ينتقل الفيديو تلقائياً إلى الثانية المحددة من قبل السيرفر، ليعيش الطالب تجربة "البث المباشر" الحقيقي.</li>
                  <li><strong>عناصر التحكم المخصصة:</strong> نقوم بحجب واجهات يوتيوب المشتتة وعرض طبقة أزرار تحكم ممتازة (تشغيل/إيقاف مؤقت، شريط تحكم بالصوت مخصص، زر تكبير كامل الشاشة، وزر جدول الحصص).</li>
                </ul>
              </div>

              {/* Admin Panel and Security */}
              <div className="space-y-3">
                <h4 className="text-base font-bold text-white border-r-4 border-indigo-500 pr-3">3. لوحة تحكم المسؤولين (Admin Panel Portal)</h4>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  اللوحة مبرمجة في <code className="text-teal-300 font-mono bg-neutral-950 px-1.5 py-0.5 rounded text-xs">AdminModal.tsx</code> وتعتمد على ميزة الرمز السري الفوري المشفر وحفظ التغييرات مباشرة.
                </p>
                <ul className="list-disc pr-5 text-neutral-300 text-xs space-y-1.5">
                  <li><strong>آلية الدخول السري (Easter Egg):</strong> يراقب النظام عدد النقرات على الحقوق السفلية للتطبيق، وعند وصولها لـ 12 نقرة، ينبثق حقل إدخال كلمة المرور السرية (الافتراضية: <code className="text-teal-400 font-mono">admin123</code>).</li>
                  <li><strong>إدارة المحتوى:</strong> تتيح للوزارة أو المشرفين إضافة قنوات (مثل: لغة عربية، رياضيات، تاريخ)، ترتيب الفيديوهات، وإدخال روابط يوتيوب بكل سهولة.</li>
                </ul>

              </div>

            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in duration-200">
              
              {/* Simple Introduction */}
              <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10">
                <h3 className="text-lg font-semibold text-indigo-400 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  دليل الطالب والمشاهد لكيفية الاستفادة الكاملة من التطبيق
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  يرحب بك تطبيق <strong className="text-white">قناة أولى ثانوى</strong> المبتكر! هذا التطبيق مصمم لمساعدتك على متابعة الحصص والشروحات التعليمية على شكل بث مباشر مستمر وجذاب وخالٍ من المشتتات.
                </p>
              </div>

              {/* Steps for Users */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="p-4 rounded-2xl bg-neutral-800 border border-neutral-700/50 space-y-2">
                  <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold">1</div>
                  <h4 className="text-base font-bold text-white">اختيار المادة والتشغيل</h4>
                  <p className="text-neutral-300 text-xs leading-relaxed">
                    اضغط على زر <strong className="text-teal-400">"اختر القناة"</strong> في واجهة البداية لتظهر لك قائمة بجميع المواد المتاحة (في حال تعددها)، أو اضغط على <strong className="text-teal-400">"تشغيل البث"</strong> مباشرة للدخول في البث الحالي للدروس.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-800 border border-neutral-700/50 space-y-2">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold">2</div>
                  <h4 className="text-base font-bold text-white">التحكم بالبث المباشر</h4>
                  <p className="text-neutral-300 text-xs leading-relaxed">
                    استخدم زر <strong className="text-indigo-400">التشغيل / الإيقاف المؤقت</strong> للتحكم في البث، وتحكم بمستوى الصوت عبر تمرير المؤشر أو الضغط على زر كتم الصوت السريع. لتكبير الشاشة اضغط على زر التكبير.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-800 border border-neutral-700/50 space-y-2">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold">3</div>
                  <h4 className="text-base font-bold text-white">جدول الفيديوهات التالية</h4>
                  <p className="text-neutral-300 text-xs leading-relaxed">
                    هل تريد معرفة الدرس القادم؟ اضغط على زر <strong className="text-purple-400">"الجدول"</strong> في شريط التحكم لرؤية قائمة الفيديوهات والشروحات المجدولة التي ستعرض تالياً فور انتهاء الدرس الحالي.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-800 border border-neutral-700/50 space-y-2">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold">4</div>
                  <h4 className="text-base font-bold text-white">لوحة الإدارة والمشرفين</h4>
                  <p className="text-neutral-300 text-xs leading-relaxed">
                    تستطيع الإدارة تحديث الفيديوهات عن طريق النقر على نص الحقوق السفلية <strong className="text-amber-400">12 مرة</strong> متتالية لإدخال كلمة السر والولوج للوحة التحكم لإضافة أو حذف دروس يوتيوب التعليمية فورياً.
                  </p>
                </div>

              </div>

              {/* Secret Tip */}
              <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex items-start gap-3">
                <div className="text-amber-400 text-xl font-bold mt-0.5">💡</div>
                <div>
                  <h5 className="font-bold text-amber-400 text-sm">ملاحظة ذكية للطلاب:</h5>
                  <p className="text-neutral-300 text-xs mt-1 leading-relaxed">
                    يقوم التطبيق بحفظ مستوى الصوت المفضل وحالة التشغيل تلقائياً، لمساعدتك على تجربة دراسية مرنة ومريحة على أجهزة الكمبيوتر والأجهزة اللوحية والمحمولة.
                  </p>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-950/40 text-center text-xs text-neutral-500 flex items-center justify-between px-6">
          <span>دليل قناة أولى ثانوى التعليمية المبتكرة</span>
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-colors cursor-pointer text-xs font-semibold"
          >
            إغلاق نافذة الدليل
          </button>
        </div>
      </div>
    </div>
  );
}
