window.SONO_SOURCES=[
{id:'nibib',name:'NIBIB · Ultrasound',url:'https://www.nibib.nih.gov/science-education/science-topics/ultrasound',note:'超声、压电换能与回波成像的基础资料。'},
{id:'bmus',name:'BMUS · Ultrasound Physics',url:'https://www.bmus.org/media/resources/files/09.45EC.pdf',note:'频率、波长、分辨率与衰减等超声物理主题。'},
{id:'bcf',name:'BCF Ultrasound · Veterinary Transducers',url:'https://www.bcfultrasound.com/collections/transducers',note:'兽用线阵、微凸阵和相控阵等探头名称参考。'},
{id:'radio',name:'RadiologyInfo · General Ultrasound',url:'https://www.radiologyinfo.org/en/info/genus',note:'超声检查、探头、耦合剂与多普勒基础。'},
{id:'msd',name:'MSD Veterinary Manual · Ultrasonography in Animals',url:'https://www.msdvetmanual.com/clinical-pathology-and-procedures/diagnostic-imaging/ultrasonography-in-animals',note:'动物超声与超声心动图的主题参考。'},
{id:'rvc',name:'Royal Veterinary College · Equine Ultrasound',url:'https://www.rvc.ac.uk/equine-vet/hospital-and-specialists/facilities/equine-diagnostic-imaging/equine-ultrasound-scans',note:'马的肌腱、腹部与其他临床超声应用。'},
{id:'vetbook',name:'Introduction to Veterinary Terminology',url:'https://pressbooks.openeducationalberta.ca/veterinarymedicalterminology/',note:'Kelly Robertson 与 Matéa David-Steel 编写的开放教材；用于检索术语主题，未复制教材释义或练习。原书许可 CC BY-NC-SA 4.0。'}
];
window.SONO_BOOKS=[
{id:'physics',name:'超声物理基础',en:'The science of sound',icon:'wave',color:'green',level:'基础入门',description:'从机械波出发，读懂频率、声阻抗与回波。',sources:['nibib','bmus'],rows:`
ultrasound|超声；超声波|频率高于人耳通常听觉上限的声波。|Ultrasound travels through a medium.
mechanical wave|机械波|需要介质传播，通过介质粒子的振动传递能量。|Sound is a mechanical wave.
longitudinal wave|纵波|粒子振动方向与传播方向平行。|A longitudinal wave has compressions and rarefactions.
transverse wave|横波|粒子振动方向与传播方向垂直。|A transverse wave oscillates across its direction of travel.
sound wave|声波|由介质中的压力扰动传播形成。|The probe emits a sound wave.
frequency|频率|每秒振动次数，单位为赫兹。|Frequency is measured in hertz.
wavelength|波长|同相位相邻两点之间的距离；波长等于声速除以频率。|A higher frequency gives a shorter wavelength at the same speed.
amplitude|振幅|表示振动或压力变化的幅度。|Echo amplitude affects image brightness.
period|周期|完成一次振动所需时间；周期为频率的倒数。|The period decreases as frequency increases.
propagation speed|传播速度；声速|声波在介质中传播的速度，取决于介质性质。|Propagation speed depends on the medium.
medium|介质|声波传播所依赖的物质，如组织或水。|Sound cannot travel through a vacuum without a medium.
compression|压缩；密部|纵波中粒子较密集、压力较高的区域。|Compression increases local pressure.
rarefaction|稀疏；疏部|纵波中粒子较疏松、压力较低的区域。|Rarefaction follows compression.
acoustic pressure|声压|声波导致的压力变化。|Acoustic pressure varies over time.
acoustic impedance|声阻抗|等于介质密度与声速的乘积；界面阻抗差影响反射。|An impedance difference produces a reflected echo.
density|密度|单位体积的质量。|Density contributes to acoustic impedance.
reflection|反射|声波遇到界面后，一部分能量返回。|Reflection occurs at a tissue boundary.
refraction|折射|声波斜入射且两侧声速不同时可改变方向。|Refraction can change the beam direction.
scattering|散射|声能向多个方向分散。|Scattering contributes to tissue texture.
absorption|吸收|声能在组织中转化为其他形式的能量，如热。|Absorption contributes to attenuation.
attenuation|衰减|声波传播中强度逐渐降低。|Attenuation limits imaging depth.
transmission|透射；传输|声能穿过介质或界面继续传播。|Transmission allows sound to reach deeper tissue.
incident angle|入射角|入射声束与界面法线之间的夹角。|The incident angle influences reflection.
interface|界面|两种组织或介质的交界面。|The interface returns a strong echo.
echo|回波|返回探头的反射或散射声信号。|The scanner processes each echo.
pulse|脉冲|持续时间有限的一段声波。|The transducer sends a short pulse.
pulse duration|脉冲持续时间|一个脉冲从开始到结束的时间。|A shorter pulse duration can improve axial resolution.
spatial pulse length|空间脉冲长度|一个脉冲在空间中占据的长度。|A shorter spatial pulse length improves axial resolution.
pulse repetition frequency|脉冲重复频率|每秒发射脉冲的次数，常缩写为 PRF。|The operator adjusts the pulse repetition frequency.
pulse repetition period|脉冲重复周期|相邻脉冲起始之间的时间，常缩写为 PRP。|A longer imaging depth requires a longer pulse repetition period.
duty factor|占空比|发射时间占总时间的比例。|Pulsed ultrasound has a low duty factor.
intensity|声强|单位面积通过的声功率。|Intensity describes power per unit area.
power|功率|单位时间传递的能量。|Acoustic power is measured in watts.
decibel|分贝|用于表示声强或幅度比的对数单位。|Gain can be expressed in decibels.
hertz|赫兹|频率单位，1 Hz 表示每秒一次周期。|One hertz means one cycle per second.
megahertz|兆赫兹|一百万赫兹，常写作 MHz。|The probe operates in the megahertz range.
near field|近场|靠近换能器、声束干涉较复杂的区域。|The near field lies close to the transducer.
far field|远场|较远处声束逐渐发散的区域。|The beam diverges in the far field.
beam width|声束宽度|影响区分横向相邻目标的能力。|A narrow beam width improves lateral resolution.
focal zone|焦区|声束较窄、聚焦效果较好的区域。|Place the focal zone near the target.
piezoelectric effect|压电效应|材料受力产生电信号；逆压电效应可将电信号转为振动。|The piezoelectric effect helps detect returning echoes.
resonance|共振|受激系统在特定频率附近产生较强振动。|The crystal has a resonance frequency.
harmonic|谐波|频率为基频整数倍的成分。|The second harmonic has twice the fundamental frequency.
fundamental frequency|基频|相对于谐波而言的基本频率。|The transmitted pulse has a fundamental frequency.
bandwidth|带宽|信号或探头包含的频率范围。|A short pulse has a broad bandwidth.
`},
{id:'equipment',name:'探头与设备',en:'Know your instruments',icon:'probe',color:'blue',level:'设备操作',description:'相控阵、线阵、微凸阵，以及常用控制参数。',sources:['bcf','nibib','bmus'],rows:`
transducer|换能器；探头|将电能和声能相互转换的器件。|The transducer both sends and receives ultrasound.
probe|探头|临床操作时对超声换能器的常用称呼。|Hold the probe gently against the skin.
linear array transducer|线阵探头|阵元沿直线排列，常用于浅表结构成像。|A linear array transducer is useful for superficial structures.
phased array transducer|相控阵探头|通过控制各阵元发射时延偏转声束，常用于心脏检查。|A phased array transducer can scan between the ribs.
curvilinear transducer|凸阵探头|阵元沿弧线排列，可获得较宽的深部视野。|A curvilinear transducer provides a wide field at depth.
microconvex transducer|微凸阵探头|接触面较小的凸阵探头，兽医腹部检查中常见。|A microconvex transducer fits a small acoustic window.
endocavitary transducer|腔内探头|设计用于体腔内检查的探头。|An endocavitary transducer is designed for internal scanning.
matrix array|矩阵阵列|阵元沿二维排列，可用于容积成像。|A matrix array can support volume imaging.
element|阵元|探头阵列中的单个换能单元。|Each element contributes to the ultrasound beam.
aperture|孔径|参与发射或接收的有效阵列宽度或面积。|The active aperture affects beam formation.
footprint|探头接触面|探头与检查区域接触的表面范围。|A small footprint helps with intercostal imaging.
matching layer|匹配层|用于改善换能材料与组织之间声能传递的结构。|The matching layer improves acoustic transmission.
backing material|背衬材料|吸收向后传播的振动并对晶体进行阻尼。|Backing material shortens crystal vibration.
damping|阻尼|抑制持续振动，有助于形成短脉冲。|Damping helps produce a short pulse.
acoustic lens|声透镜|通过声学结构帮助聚焦声束。|The acoustic lens helps focus the beam.
beamformer|波束形成器|控制各通道时延与信号叠加的组件。|The beamformer combines signals from many elements.
beam steering|声束偏转|通过电子控制改变声束方向。|Beam steering changes the insonation angle.
electronic focusing|电子聚焦|通过阵元时延控制实现声束聚焦。|Electronic focusing narrows the beam at a selected depth.
gain|增益|放大接收信号；调增益并不等于调发射功率。|Reduce the gain if the image is too bright.
time gain compensation|时间增益补偿|按深度调节接收增益，常缩写为 TGC。|Time gain compensation balances brightness at different depths.
dynamic range|动态范围|显示或处理信号强弱差异的范围。|Dynamic range affects image contrast.
depth|深度|图像显示的组织深度范围。|Adjust the depth to include the whole organ.
focus|焦点|声束聚焦所在位置。|Move the focus to the region of interest.
output power|输出功率|设备发射的声功率，与接收增益不同。|Output power controls transmitted acoustic energy.
frequency range|频率范围|探头可以工作的频率区间。|Choose a frequency range suitable for the target depth.
preset|预设|按检查类型保存的一组机器设置。|Select the abdominal preset.
freeze|冻结|暂停实时图像，便于测量和保存。|Freeze the image before placing the calipers.
cine loop|电影回放；动态图像回放|用于回看一段连续图像。|Review the cine loop frame by frame.
caliper|测量标尺；测量游标|图像上测量距离或其他参数的工具。|Place a caliper at each boundary.
coupling gel|耦合剂|减少探头与皮肤间空气，帮助传递超声。|Apply coupling gel before scanning.
standoff pad|声学垫块|用于改善极浅表结构成像的间隔介质。|A standoff pad can help image superficial tissue.
probe cover|探头保护套|按检查要求使用的探头屏障保护用品。|Use an appropriate probe cover for the procedure.
disinfection|消毒|按设备和机构要求减少微生物污染的过程。|Follow the manufacturer's disinfection instructions.
portable scanner|便携式超声仪|便于移动使用的超声设备。|The portable scanner is used at the bedside.
handheld ultrasound|掌上超声|手持式、体积较小的超声系统。|Handheld ultrasound can support focused examinations.
scan converter|扫描转换器|将采集数据转换成适合显示的图像格式。|The scan converter prepares data for display.
frame rate|帧率|每秒显示的图像帧数。|A higher frame rate helps display rapid motion.
line density|线密度|一定图像区域内扫描线的密集程度。|Higher line density can reduce frame rate.
region of interest|感兴趣区|选定用于重点成像或分析的区域，常写 ROI。|Keep the region of interest small for faster color imaging.
DICOM|医学数字成像与通信标准|医疗影像存储和传输使用的标准。|Export the study in DICOM format.
`},
{id:'imaging',name:'成像与伪像',en:'Read the echoes',icon:'scan',color:'purple',level:'影像理解',description:'B 超、图像描述、分辨率与常见伪像。',sources:['nibib','bmus','msd','radio'],rows:`
B-mode|B 型超声；亮度模式|以亮度表示回波强弱的二维成像方式。|B-mode displays echoes as dots of varying brightness.
M-mode|M 型超声；运动模式|显示一条扫描线上结构随时间的变化。|M-mode shows tissue motion over time.
A-mode|A 型超声；幅度模式|以波峰幅度表示回波强度的显示方式。|A-mode plots echo amplitude against depth.
sonography|超声检查法|利用超声形成图像的检查方法。|Sonography provides real-time images.
ultrasonography|超声检查；超声成像|与 sonography 常用于指同一检查技术。|Ultrasonography is used in veterinary practice.
sonogram|超声图像|超声检查获得的图像。|Save a representative sonogram.
echogenicity|回声性；回声强度|描述组织产生回声的相对能力。|Compare the echogenicity of adjacent tissues.
hyperechoic|高回声的|相对于参照组织，显示更亮的回声。|The structure is hyperechoic relative to the liver.
hypoechoic|低回声的|相对于参照组织，显示更暗的回声。|The lesion is hypoechoic relative to nearby tissue.
anechoic|无回声的|几乎不产生可见内部回声，通常呈黑色。|Simple fluid is often anechoic.
isoechoic|等回声的|与参照组织的回声强度相近。|The nodule is isoechoic to the surrounding tissue.
echotexture|回声纹理|描述组织内部回声的分布和细致程度。|Describe the echotexture of the spleen.
homogeneous|均匀的|内部回声分布较一致。|The organ has a homogeneous appearance.
heterogeneous|不均匀的|内部回声分布不一致。|The mass has a heterogeneous echotexture.
axial resolution|轴向分辨率|区分沿声束方向相邻目标的能力。|A shorter pulse improves axial resolution.
lateral resolution|侧向分辨率|区分垂直于声束方向相邻目标的能力。|A narrow beam improves lateral resolution.
elevational resolution|层厚方向分辨率|区分切面厚度方向相邻目标的能力。|Slice thickness affects elevational resolution.
temporal resolution|时间分辨率|分辨快速变化或运动的能力。|Cardiac imaging requires good temporal resolution.
contrast resolution|对比分辨率|分辨回声强度较接近组织的能力。|Contrast resolution helps distinguish similar tissues.
penetration|穿透力；穿透深度|声波到达较深组织并产生可用回波的能力。|Lower frequency usually improves penetration.
artifact|伪像|图像上不完全对应真实组织的表现。|An artifact can mimic a lesion.
acoustic shadowing|声影|强衰减结构后方回声减少形成的暗区。|A mineralized structure may cause acoustic shadowing.
posterior acoustic enhancement|后方回声增强|低衰减结构后方回声相对增强。|A fluid-filled cyst may show posterior acoustic enhancement.
reverberation|混响伪像|声波在强反射界面之间多次往返形成的重复回声。|Reverberation creates repeated echoes.
comet-tail artifact|彗尾伪像|表现为逐渐衰减短尾状回声的伪像。|A comet-tail artifact extends behind the reflector.
ring-down artifact|振铃伪像|可见于气体相关结构后的连续回声带。|Gas may produce a ring-down artifact.
mirror image artifact|镜像伪像|强反射界面导致结构被显示为镜像。|The diaphragm can be associated with a mirror image artifact.
side lobe artifact|旁瓣伪像|主声束之外声能产生回波所致的伪像。|Side lobe artifact may add echoes inside fluid.
anisotropy|各向异性|回声表现随声束入射方向变化，肌腱检查中常见。|Anisotropy can make a normal tendon look dark.
speckle|散斑|许多散射回波干涉形成的颗粒状纹理。|Speckle contributes to image texture.
tissue harmonic imaging|组织谐波成像|利用组织中产生的谐波信号形成图像。|Tissue harmonic imaging may improve image clarity.
spatial compounding|空间复合成像|将多个角度采集的图像进行组合。|Spatial compounding combines views from different angles.
elastography|弹性成像|评估组织力学性质的成像技术。|Elastography provides information about tissue stiffness.
contrast-enhanced ultrasound|超声造影|使用超声造影剂增强信号的检查。|Contrast-enhanced ultrasound can display tissue perfusion.
acoustic window|声窗|适合让声束进入并观察目标的路径。|Find an acoustic window between the ribs.
longitudinal section|纵切面|沿目标长轴获得的切面。|Obtain a longitudinal section of the kidney.
transverse section|横切面|与目标长轴垂直的切面。|Measure the structure in transverse section.
sagittal plane|矢状面|将身体分成左、右部分的平面。|The sagittal plane divides left from right.
dorsal plane|背侧面；额状面|兽医解剖中将身体分成背、腹部分的平面。|The dorsal plane separates dorsal and ventral portions.
real-time imaging|实时成像|在检查时连续显示动态图像。|Real-time imaging shows organ movement.
`},
{id:'doppler',name:'多普勒与心脏',en:'Follow the flow',icon:'heart',color:'rose',level:'进阶专项',description:'从多普勒频移到血流频谱和超声心动图。',sources:['msd','radio','bmus'],rows:`
Doppler effect|多普勒效应|波源与观察者相对运动造成观测频率变化。|The Doppler effect is used to assess moving blood.
Doppler shift|多普勒频移|接收频率与发射频率之间的差。|The Doppler shift depends on velocity and angle.
color Doppler|彩色多普勒|用颜色编码显示血流相关信息；颜色方向以当前色标为准。|Check the color map before interpreting color Doppler.
power Doppler|能量多普勒|显示多普勒信号强度，常用于观察低速血流。|Power Doppler can help display small vessels.
spectral Doppler|频谱多普勒|显示速度或频移随时间变化的分布。|Spectral Doppler displays a velocity waveform.
pulsed-wave Doppler|脉冲波多普勒|按采样深度获得血流信息，常缩写为 PW。|Pulsed-wave Doppler samples a selected depth.
continuous-wave Doppler|连续波多普勒|连续发射和接收，可测高流速但缺少距离选通。|Continuous-wave Doppler can measure high velocities.
sample volume|取样容积|脉冲多普勒选定采样的小区域。|Place the sample volume inside the vessel.
aliasing|混叠|采样频率不足时出现频谱折返或颜色突变。|Aliasing can occur when the Doppler shift exceeds the Nyquist limit.
Nyquist limit|奈奎斯特极限|脉冲采样时为 PRF 的一半。|Increasing PRF raises the Nyquist limit.
angle correction|角度校正|依据声束与血流夹角修正速度估计。|Accurate angle correction is important for velocity measurement.
wall filter|壁滤波器|抑制低频组织运动等信号的滤波设置。|A high wall filter may remove slow-flow signals.
baseline|基线|频谱显示中零频移或零速度的参考线。|Shift the baseline to improve the spectral display.
blood flow|血流|血液在心脏和血管中的流动。|Doppler ultrasound evaluates blood flow.
velocity|速度|多普勒检查中常指血流速度。|The peak velocity is measured on the waveform.
laminar flow|层流|各层相对有序的流动。|Laminar flow has an organized velocity pattern.
turbulent flow|湍流|流速和方向复杂变化的流动状态。|Turbulent flow can broaden the Doppler spectrum.
peak systolic velocity|收缩期峰值流速|收缩期频谱上的最高流速，常写 PSV。|Measure the peak systolic velocity.
end-diastolic velocity|舒张末期流速|舒张末期测得的流速，常写 EDV。|Record the end-diastolic velocity.
resistive index|阻力指数|常用公式为 (PSV−EDV)/PSV，简称 RI。|The resistive index is calculated from the waveform.
pulsatility index|搏动指数|用收缩、舒张及平均速度反映搏动性的指标，简称 PI。|The pulsatility index describes waveform pulsatility.
echocardiography|超声心动图检查|利用超声评估心脏结构与功能。|Echocardiography evaluates cardiac structure and function.
atrium|心房|接受回流血液的心腔。|The left atrium receives pulmonary venous blood.
ventricle|心室|将血液泵入动脉的心腔。|The left ventricle pumps blood into the aorta.
interventricular septum|室间隔|左右心室之间的隔壁。|Measure the interventricular septum.
mitral valve|二尖瓣|位于左心房与左心室之间的瓣膜。|Assess motion of the mitral valve.
tricuspid valve|三尖瓣|位于右心房与右心室之间的瓣膜。|The tricuspid valve lies on the right side of the heart.
aortic valve|主动脉瓣|位于左心室流出道与主动脉之间。|Blood crosses the aortic valve during systole.
regurgitation|反流|血液逆正常方向通过瓣膜等结构。|Doppler imaging can detect valvular regurgitation.
stenosis|狭窄|管腔或瓣口异常变窄。|Stenosis may increase flow velocity.
ejection fraction|射血分数|每次收缩射出的血量占舒张末期心室容积的比例。|Ejection fraction is a measure of ventricular emptying.
fractional shortening|缩短分数|常由心室舒张末和收缩末内径计算，简称 FS。|Fractional shortening is calculated from ventricular dimensions.
systole|收缩期|心脏主要收缩、射血的阶段。|The ventricle contracts during systole.
diastole|舒张期|心脏主要舒张、充盈的阶段。|Ventricular filling occurs during diastole.
pericardial effusion|心包积液|心包腔内出现过量液体。|Ultrasound can reveal pericardial effusion.
`},
{id:'anatomy',name:'动物解剖与方位',en:'Map the animal body',icon:'paw',color:'amber',level:'兽医基础',description:'犬猫、马与反刍动物常见器官及解剖方位。',sources:['vetbook','rvc'],rows:`
canine|犬的；犬科的|兽医语境中常指与犬相关。|This is a canine abdominal scan.
feline|猫的；猫科的|兽医语境中常指与猫相关。|The patient is a feline case.
equine|马的；马科的|描述马及相关临床领域。|Equine ultrasound often includes tendon assessment.
bovine|牛的；牛科的|描述牛及相关临床领域。|The clinic provides bovine reproductive services.
ovine|绵羊的|与绵羊相关的形容词。|Ovine anatomy differs from canine anatomy.
caprine|山羊的|与山羊相关的形容词。|The sample is from a caprine patient.
porcine|猪的|与猪相关的形容词。|The study describes porcine anatomy.
ruminant|反刍动物|如牛、羊等进行反刍的动物。|A cow is a ruminant.
cranial|颅侧的；向头侧的|躯干上表示朝向头部。|Move the probe in a cranial direction.
caudal|尾侧的；向尾侧的|表示朝向尾部。|The bladder is caudal to the kidneys.
dorsal|背侧的|表示朝向背部。|Identify the dorsal body wall.
ventral|腹侧的|表示朝向腹部。|Scan along the ventral abdomen.
medial|内侧的|靠近身体正中面的方向。|The structure lies medial to the kidney.
lateral|外侧的|远离身体正中面的方向。|Move the probe slightly lateral.
proximal|近端的|肢体中靠近躯干或结构起点的一端。|Examine the proximal part of the tendon.
distal|远端的|肢体中远离躯干或结构起点的一端。|Follow the tendon distally.
superficial|浅表的|靠近体表。|A high-frequency probe helps image superficial structures.
deep|深部的|远离体表。|The target is deep to the abdominal wall.
recumbency|卧位|描述动物躺卧时的体位。|Position the patient in dorsal recumbency.
abdomen|腹部|胸部与骨盆之间的身体区域。|Prepare the abdomen for ultrasound.
thorax|胸部；胸腔区域|位于颈部与腹部之间。|The ribs form part of the thorax.
liver|肝脏|腹部实质器官，常用于回声比较。|Evaluate the liver in several planes.
gallbladder|胆囊|储存胆汁的囊性器官。|The gallbladder contains bile.
bile duct|胆管|输送胆汁的管道。|Follow the bile duct carefully.
spleen|脾脏|与血液和免疫功能相关的器官。|Assess the size and echotexture of the spleen.
kidney|肾脏|生成尿液并参与体液调节的器官。|Obtain a long-axis view of the kidney.
renal cortex|肾皮质|肾脏外周实质部分。|Compare the renal cortex with adjacent tissues.
renal medulla|肾髓质|位于肾皮质深面的实质部分。|The renal medulla lies inside the cortex.
renal pelvis|肾盂|收集尿液并通向输尿管的结构。|Inspect the renal pelvis for dilation.
ureter|输尿管|连接肾盂与膀胱的管道。|The ureter carries urine to the bladder.
urinary bladder|膀胱|暂时储存尿液的器官。|Examine the urinary bladder wall.
urethra|尿道|将尿液从膀胱排向体外的通道。|Evaluate the urethra when visible.
adrenal gland|肾上腺|邻近肾脏的内分泌腺。|Identify the adrenal gland near the kidney.
pancreas|胰腺|具有消化与内分泌功能的器官。|Locate the pancreas using nearby landmarks.
stomach|胃|消化道中连接食管与小肠的器官。|Gas can limit visualization of the stomach wall.
duodenum|十二指肠|小肠起始部分。|Trace the duodenum in the cranial abdomen.
jejunum|空肠|小肠中段。|Assess several jejunal loops.
ileum|回肠|小肠末段。|The ileum joins the large intestine.
colon|结肠|大肠的主要组成部分。|The colon may contain gas and fecal material.
lymph node|淋巴结|免疫系统中的淋巴组织结构。|Assess the shape of the lymph node.
uterus|子宫|雌性生殖系统中孕育胎儿的器官。|Examine both uterine horns.
ovary|卵巢|产生卵细胞和生殖激素的器官。|The ovary may contain follicles.
prostate|前列腺|雄性生殖系统中的附属性腺。|Assess the prostate in a male dog.
testis|睾丸|雄性产生精子与激素的器官。|Examine each testis separately.
tendon|肌腱|连接肌肉与骨的结缔组织。|Scan the tendon in two planes.
ligament|韧带|连接并稳定骨与关节的结缔组织。|Evaluate the ligament for structural changes.
diaphragm|膈肌|分隔胸腔与腹腔的肌性结构。|The diaphragm borders the cranial abdomen.
pleura|胸膜|覆盖肺表面并衬覆胸壁的浆膜。|Identify the pleura at the chest wall.
peritoneum|腹膜|衬覆腹盆腔并包裹部分器官的浆膜。|Fluid may collect in the peritoneal cavity.
aorta|主动脉|体循环主要动脉。|The aorta is a useful anatomical landmark.
`},
{id:'clinical',name:'兽医临床与检查',en:'Words for everyday practice',icon:'medical',color:'sand',level:'临床常用',description:'检查、病变描述、繁殖、检验与常用医学词根。',sources:['vetbook','msd','rvc'],rows:`
veterinary medicine|兽医学|研究动物健康、疾病预防与诊疗的学科。|Veterinary medicine includes many animal species.
veterinarian|兽医师|从事动物医疗工作的专业人员。|The veterinarian examines the patient.
diagnostic imaging|诊断影像学；影像检查|利用成像技术评估动物体内结构。|Ultrasound is a form of diagnostic imaging.
clinical history|病史|与当前检查相关的既往和近期健康信息。|Review the clinical history before scanning.
physical examination|体格检查|通过视、触、听等方法评估身体情况。|A physical examination precedes further testing.
palpation|触诊|用手触摸评估组织或器官的检查方法。|Palpation reveals abdominal discomfort.
auscultation|听诊|借助听诊器等听取体内声音。|Cardiac auscultation detects a murmur.
differential diagnosis|鉴别诊断|综合资料考虑并区分多种可能病因。|The imaging findings guide the differential diagnosis.
lesion|病变|组织中异常或受损的区域。|Document the location of the lesion.
mass|肿块|占位性结构描述，本身不等同于恶性肿瘤。|Measure the mass in three dimensions.
nodule|结节|相对局限的小型结节状结构。|A small nodule is visible in the spleen.
cyst|囊肿|有囊壁、内含液体等物质的腔性结构。|The cyst contains fluid.
abscess|脓肿|局部组织内形成的积脓。|An abscess is a localized collection of pus.
effusion|积液|体腔内液体异常积聚。|Ultrasound can identify an effusion.
ascites|腹水|腹膜腔内游离液体增多的表现。|The scan shows ascites.
edema|水肿|组织间隙内液体过量积聚。|Edema increases tissue swelling.
inflammation|炎症|组织对损伤等刺激产生的反应。|Inflammation may alter tissue appearance.
neoplasia|肿瘤形成；肿瘤性病变|异常细胞增生形成肿瘤的过程或状态。|Further testing is needed to investigate neoplasia.
benign|良性的|肿瘤语境中通常指无恶性生物学行为。|Histology helps classify a mass as benign.
malignant|恶性的|肿瘤语境中具有侵袭或转移等特征。|A malignant tumor may spread to other tissues.
metastasis|转移|恶性肿瘤向原发部位以外扩散。|Assess regional nodes for possible metastasis.
biopsy|活组织检查；活检|获取组织用于病理检查。|A biopsy provides tissue for examination.
fine-needle aspiration|细针穿刺抽吸|用细针采集细胞等样本，常缩写 FNA。|Fine-needle aspiration collects a cellular sample.
cytology|细胞学|对细胞形态等进行检查与研究。|Submit the aspirate for cytology.
histopathology|组织病理学|检查组织结构及病理变化。|Histopathology examines tissue architecture.
ultrasound-guided|超声引导的|在超声图像监视下定位或操作。|The clinician performs an ultrasound-guided procedure.
cystocentesis|膀胱穿刺术|通过穿刺膀胱获取尿液的操作。|Cystocentesis can provide a urine sample.
urinalysis|尿液分析|评估尿液物理、化学和显微成分。|Urinalysis is part of the diagnostic workup.
hematology|血液学|研究血细胞及相关疾病的领域。|Hematology evaluates blood cells.
complete blood count|全血细胞计数；血常规|评估血细胞数量及相关参数，常写 CBC。|A complete blood count measures several cell populations.
anemia|贫血|红细胞或血红蛋白等低于相应参考范围的状态。|Anemia requires investigation of its cause.
leukocyte|白细胞|参与免疫与炎症反应的血细胞。|A leukocyte is a white blood cell.
erythrocyte|红细胞|主要参与氧运输的血细胞。|An erythrocyte contains hemoglobin.
platelet|血小板|参与止血的血液成分。|A platelet contributes to clot formation.
hepatomegaly|肝肿大|hepato- 表示肝，-megaly 表示肿大。|Hepatomegaly means enlargement of the liver.
splenomegaly|脾肿大|spleno- 表示脾，-megaly 表示肿大。|Splenomegaly describes an enlarged spleen.
hydronephrosis|肾积水|与尿液引流异常等相关的肾盂肾盏扩张。|Hydronephrosis involves dilation of the collecting system.
urolithiasis|尿石症|泌尿系统内形成结石。|Urolithiasis may affect the urinary bladder.
pancreatitis|胰腺炎|pancreat- 表示胰腺，-itis 表示炎症。|Pancreatitis means inflammation of the pancreas.
pyometra|子宫蓄脓|子宫内积脓的疾病名称。|Pyometra is an important uterine disease.
pregnancy diagnosis|妊娠诊断|检查是否妊娠的过程。|Ultrasound is used for pregnancy diagnosis.
gestation|妊娠；妊娠期|胚胎和胎儿在母体内发育的时期。|Gestation length varies by species.
fetus|胎儿|产前发育阶段的个体。|The fetus is visible within the uterus.
follicle|卵泡；滤泡|生殖语境中指卵巢内含卵母细胞的结构。|The ovary contains a developing follicle.
corpus luteum|黄体|排卵后形成的暂时性内分泌结构。|The corpus luteum develops after ovulation.
ovulation|排卵|卵细胞从卵巢释放的过程。|Follicular development precedes ovulation.
estrus|发情期|雌性在发情周期中接受交配的阶段。|Estrus is a phase of the reproductive cycle.
lameness|跛行|步态异常的一种临床表现。|Tendon imaging may be part of a lameness workup.
colic|腹痛；疝痛|尤其在马医学中用于描述腹痛表现。|Colic is a common reason for equine abdominal assessment.
point-of-care ultrasound|床旁超声；即时超声|在就诊现场针对特定问题开展的超声检查，常写 POCUS。|Point-of-care ultrasound answers focused clinical questions.
`}
];
window.SONO_SOURCES.push(
{id:'nasa',name:'NASA · Systems Engineering Handbook',url:'https://www.nasa.gov/reference/systems-engineering-handbook/',note:'系统设计、集成、试验与工程管理的主题参考，补充设备研发常用表达。'},
{id:'github',name:'GitHub Docs · Understanding GitHub Actions',url:'https://docs.github.com/en/actions/get-started/understand-github-actions',note:'构建、测试、持续集成与部署工作流的主题参考，补充常见软件研发术语。'},
{id:'scrum',name:'Scrum Guides · The Scrum Guide',url:'https://scrumguides.org/scrum-guide.html',note:'Product Owner、待办列表、Sprint、增量与完成标准等主题参考；产品经理与 Product Owner 并非在所有组织中都是同一岗位。'},
{id:'govdiscovery',name:'GOV.UK Service Manual · Discovery',url:'https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works',note:'用户问题、探索、限制条件与可行性的主题参考，补充常用产品工作表达。'},
{id:'ireb',name:'IREB CPRE · Online Glossary',url:'https://cpre.ireb.org/en/downloads-and-resources/glossary',note:'需求工程核心术语的参考入口；词库为学习用途自主整理，并非 CPRE 官方中文词表或考试题库。'}
);
window.SONO_BOOKS.push(
{id:'engineering',name:'研发与工程',en:'Build, test, improve',icon:'settings',color:'blue',level:'研发协作',description:'硬件、固件、软件、信号链与研发测试，贴近超声设备开发。',sources:['nasa','github'],rows:`
research and development|研究与开发；研发|常缩写为 R&D，包括技术探索与产品开发等工作。|Research and development improves the next ultrasound platform.
proof of concept|概念验证|常缩写为 PoC，用小规模试验判断关键想法能否实现。|The proof of concept demonstrates a new imaging algorithm.
feasibility study|可行性研究|评估技术、资源、时间和成本等条件是否支持方案落地。|The feasibility study compares two probe interface designs.
system architecture|系统架构|描述系统主要组成、职责分配及其交互关系。|The system architecture separates acquisition from image display.
hardware|硬件|设备中的实体电子、机械等组成部分。|The hardware team reviews the acquisition board.
firmware|固件|运行在设备或控制器上、与硬件紧密相关的软件。|The firmware controls the probe interface.
embedded system|嵌入式系统|集成在设备内、承担特定功能的计算系统。|The embedded system manages the scanner controls.
software development|软件开发|从设计、实现到测试和维护软件的活动。|Software development includes testing the measurement tools.
source code|源代码|开发者编写的程序文本。|The source code for image export needs review.
algorithm|算法|解决问题的一组明确步骤或计算方法。|The algorithm reduces noise in the image.
field-programmable gate array|现场可编程门阵列|常缩写为 FPGA，可配置逻辑资源以实现数字处理功能。|The field-programmable gate array processes acquisition data.
application programming interface|应用程序编程接口|常缩写为 API，定义软件之间如何调用功能或交换数据。|The application programming interface exposes the export function.
software development kit|软件开发工具包|常缩写为 SDK，通常包含接口、工具、示例和文档。|The software development kit includes a sample acquisition program.
version control|版本控制|记录文件变更并协助多人协作的机制。|Version control preserves the history of the firmware.
repository|代码仓库；存储库|集中管理项目文件与版本历史的位置。|The repository contains the scanner software.
branch|分支|版本控制中用于独立开展修改的一条开发线。|Create a branch for the new measurement feature.
commit|提交；提交记录|在版本控制中记录一组文件变更。|This commit fixes the image export error.
pull request|拉取请求；合并请求|提出一组代码修改供他人审查并讨论合并。|Open a pull request for the new display controls.
code review|代码审查|检查代码的正确性、可维护性及相关问题。|Code review identified a missing boundary check.
merge conflict|合并冲突|多个修改无法由版本控制工具自动合并的情况。|Resolve the merge conflict before running the tests.
build|构建；构建版本|将源文件及资源处理为可运行产物的过程或结果。|The latest build includes the new probe preset.
dependency|依赖项|软件运行或构建所需的其他模块、库或工具。|Update the dependency after checking compatibility.
debugging|调试|定位并分析程序或系统异常的过程。|Debugging revealed an incorrect image buffer size.
unit testing|单元测试|针对较小代码单元独立检查其行为。|Unit testing checks the distance calculation.
integration testing|集成测试|检查多个模块连接后能否正确协同。|Integration testing covers the probe and acquisition software.
regression testing|回归测试|修改后重新检查原有功能是否受到影响。|Regression testing confirms that saved measurements still load.
test coverage|测试覆盖率|描述测试触及代码或需求等目标的程度，不单独代表质量。|Test coverage highlights untested error paths.
continuous integration|持续集成|常缩写为 CI，频繁合并变更并通过自动检查及时发现问题。|Continuous integration runs tests on each proposed change.
continuous delivery|持续交付|让通过验证的变更保持可发布状态，正式发布可保留人工决策。|Continuous delivery keeps a tested package ready for release.
deployment|部署|将软件放到目标运行环境并使其可用。|Deployment installs the approved software on the test scanner.
rollback|回滚|出现问题时恢复到较早的可用版本或状态。|Prepare a rollback plan before updating the test system.
technical debt|技术债务|某些技术选择带来的后续维护和改进负担。|The team reserves time to reduce technical debt.
refactoring|重构|在保持预期外部行为的前提下改进代码内部结构。|Refactoring simplifies the measurement module.
performance optimization|性能优化|针对速度、资源占用等目标改进系统表现。|Performance optimization reduces the time needed to save a scan.
latency|延迟|从输入或请求到相应输出之间的时间。|Low latency helps the display respond to probe movement.
throughput|吞吐量|单位时间内完成的数据处理量或工作量。|Measure the throughput of the acquisition pipeline.
memory leak|内存泄漏|不再需要的内存未被正确释放或回收。|A memory leak causes memory use to grow during long scans.
concurrency|并发|多个任务在重叠时间段内推进的能力或执行方式。|Concurrency allows image saving while acquisition continues.
real-time processing|实时处理|在任务所要求的时限内处理输入并给出结果。|Real-time processing supports live ultrasound display.
signal processing|信号处理|对采集的信号进行滤波、变换或分析等操作。|Signal processing converts acquisition data into useful information.
analog front end|模拟前端|常缩写为 AFE，接收并调理模拟输入信号的电路部分。|The analog front end amplifies the received echo signal.
analog-to-digital converter|模数转换器|常缩写为 ADC，将模拟量转换为数字表示。|The analog-to-digital converter samples the received signal.
sampling rate|采样率|每秒采集的样本数，与脉冲重复频率是不同概念。|The sampling rate determines the spacing of digital samples.
signal-to-noise ratio|信噪比|常缩写为 SNR，表示有效信号与噪声的相对水平。|A higher signal-to-noise ratio makes weak echoes easier to detect.
printed circuit board|印制电路板|常缩写为 PCB，承载并连接电子元器件。|The printed circuit board connects the acquisition components.
schematic|电路原理图；示意图|用符号表达电路连接或系统关系的图。|Review the schematic before changing the power circuit.
bill of materials|物料清单|常缩写为 BOM，列出组成产品所需的物料和零件。|The bill of materials lists the connectors and cables.
component|元器件；部件|构成硬件或系统的组成单元。|The replacement component must meet the design specifications.
tolerance|公差；容差|参数相对于目标值允许的变化范围。|Check the tolerance of the timing components.
calibration|校准|通过与参考值比较，确定测量示值与参考值的关系；不等同于调整。|Calibration compares the instrument readings with a reference.
electromagnetic compatibility|电磁兼容性|常缩写为 EMC，涉及设备在电磁环境中的工作及其电磁影响。|Electromagnetic compatibility is considered during hardware design.
thermal management|热管理|通过设计控制设备发热与散热。|Thermal management keeps the enclosure temperature under control.
enclosure|外壳；机壳|包覆并保护设备内部部件的结构。|The enclosure protects the electronics.
reliability|可靠性|在规定条件和时间内完成所需功能的能力。|Reliability testing examines repeated operating cycles.
maintainability|可维护性|系统便于检查、维修或修改的程度。|Modular hardware can improve maintainability.
failure mode|失效模式|产品或部件发生失效时所表现的方式。|The review identifies a possible connector failure mode.
root cause analysis|根因分析|常缩写为 RCA，追查问题背后的根本原因。|Root cause analysis links the fault to an unstable power supply.
test bench|测试台；试验平台|为验证部件或系统而搭建的测试环境。|The test bench simulates signals from the probe interface.
integration|集成|将各部件或模块组合成协同工作的系统。|System integration connects acquisition, processing, and display.
design review|设计评审|在设计过程中对方案、证据与问题进行系统检查。|The design review compares the interface options.
`},
{id:'product',name:'产品经理',en:'Discover and deliver value',icon:'target',color:'purple',level:'产品工作',description:'从用户调研到产品规划、敏捷迭代、发布和效果衡量。',sources:['scrum','govdiscovery'],rows:`
product manager|产品经理|协调用户需求、业务目标与技术约束，推动产品决策的岗位。|The product manager prioritizes improvements to the scanning workflow.
product owner|产品负责人|Scrum 中对产品价值和产品待办列表管理负责的角色。|The product owner orders the product backlog.
product vision|产品愿景|描述产品希望实现的长期方向。|The product vision focuses on simpler veterinary imaging workflows.
product strategy|产品战略|为实现产品目标而作出的关键选择与取舍。|The product strategy identifies the users and problems to focus on.
product roadmap|产品路线图|展示产品方向和阶段性重点的规划，不必等同于固定承诺。|The product roadmap highlights the next workflow improvements.
product discovery|产品探索|调查问题、用户与方案，减少产品决策中的不确定性。|Product discovery begins with observing clinical work.
market research|市场调研|收集并分析市场、客户与相关环境的信息。|Market research explores how clinics select ultrasound equipment.
competitive analysis|竞品分析|比较相关产品的定位、功能及优劣势。|Competitive analysis compares image export workflows.
target market|目标市场|产品选择重点服务的市场范围。|The target market includes small animal clinics.
customer segment|客户细分群体|按需求或特征划分的客户群。|This customer segment values portability.
user persona|用户画像|基于研究概括典型用户的目标、行为和背景。|The user persona describes a veterinarian who works across several clinics.
user journey|用户旅程|用户为实现目标经历的一系列接触点和步骤。|Map the user journey from patient registration to report sharing.
pain point|痛点|用户在完成任务时遇到的显著困难。|Repeated manual entry is a common pain point.
value proposition|价值主张|说明产品为目标客户提供什么价值及其原因。|The value proposition emphasizes faster access to saved studies.
product positioning|产品定位|明确产品面向谁、解决什么问题及如何被理解。|Product positioning distinguishes the portable scanner from a cart-based system.
minimum viable product|最小可行产品|常缩写为 MVP，以足够小的可用方案验证关键假设并获取反馈。|The minimum viable product tests a simpler report workflow.
product-market fit|产品市场契合度|常缩写为 PMF，描述产品与目标市场需求的匹配情况。|Repeat usage can provide evidence when assessing product-market fit.
product lifecycle|产品生命周期|产品从形成、推出到演进和退出的过程。|Support needs change across the product lifecycle.
product requirements document|产品需求文档|常缩写为 PRD，记录问题、目标、范围与预期产品行为。|The product requirements document explains the new measurement workflow.
business case|商业论证|从价值、投入、风险等方面论证一项工作的理由。|The business case compares development cost with expected benefits.
product backlog|产品待办列表|Scrum 中为改进产品而维护的有序工作列表。|The product backlog includes workflow improvements and technical work.
backlog refinement|待办列表细化|持续澄清并拆分待办条目，补充必要信息。|Backlog refinement clarifies the image export options.
prioritization|优先级排序|根据目标、价值、风险等因素决定先后顺序。|Prioritization balances user value and engineering effort.
trade-off|权衡；取舍|在多个无法同时最大化的目标之间作选择。|The team discusses the trade-off between battery life and processing speed.
scope|范围|某项工作包括和不包括的内容边界。|The scope of this release covers report templates.
milestone|里程碑|用于标识重要进展或检查点的时间节点或事件。|The next milestone is a working acquisition prototype.
release plan|发布计划|说明准备发布的内容、安排和依赖条件。|The release plan includes testing and user communication.
sprint|冲刺；迭代周期|Scrum 中固定时长、用于形成有价值增量的周期。|The sprint focuses on improving saved-study search.
sprint goal|冲刺目标|为一次 Sprint 提供共同方向的目标。|The sprint goal is to make study retrieval easier.
iteration|迭代|通过重复工作周期逐步学习并改进。|Each iteration incorporates feedback from the test users.
increment|增量|Scrum 中朝产品目标迈进的可用成果。|The increment adds a usable measurement feature.
definition of done|完成的定义；完成标准|常缩写为 DoD，描述增量达到所需质量时的状态。|The definition of done includes the required quality checks.
user experience|用户体验|常缩写为 UX，涵盖用户与产品交互时的整体体验。|User experience includes how easily a clinician completes a report.
user interface|用户界面|常缩写为 UI，用户直接操作或感知的交互界面。|The user interface makes the freeze control easy to find.
wireframe|线框图|用简化结构表达页面布局与信息层级。|The wireframe shows where measurements will appear.
low-fidelity prototype|低保真原型|以较低细节成本呈现交互或概念的试验性模型。|A low-fidelity prototype helps compare two navigation ideas.
usability testing|可用性测试|观察目标用户完成任务，发现使用中的困难。|Usability testing reveals confusion in the export dialog.
customer feedback|客户反馈|客户对产品使用、需求或问题提出的信息。|Customer feedback suggests adding a recent-studies list.
key performance indicator|关键绩效指标|常缩写为 KPI，用于衡量与关键目标相关的表现。|The key performance indicator tracks report completion time.
objectives and key results|目标与关键结果|常缩写为 OKR，用目标和可衡量结果协调工作方向。|Objectives and key results connect team work with product outcomes.
success metric|成功指标|用来判断一项改变是否达到预期效果的量化指标。|The success metric is the share of users who finish the export task.
adoption rate|采用率|按约定口径衡量目标用户开始使用产品或功能的比例。|Measure the adoption rate of the new report template.
retention rate|留存率|在约定时间和用户群内继续使用的比例。|Retention rate is measured for a clearly defined user cohort.
conversion rate|转化率|完成目标行为的数量相对于约定起点数量的比例。|The conversion rate measures how many trial users request a demonstration.
churn rate|流失率|在约定周期和口径下流失用户或客户的比例。|The team defines churn rate before comparing monthly results.
activation|激活；首次关键价值体验|产品语境中指用户达到所定义的初次价值行为。|Activation occurs when a new user successfully saves a first study.
feature flag|功能开关|通过配置控制某项功能是否开放的机制。|A feature flag enables the new workflow for a small pilot group.
A/B testing|A/B 测试；对照实验|将用户等分配到不同版本，比较预先定义的指标。|A/B testing compares two help screens for the learning app.
launch|产品发布；上市|将产品或功能推向预定用户的活动。|The launch includes documentation and training materials.
cross-functional collaboration|跨职能协作|产品、研发、设计等不同专业共同推进目标。|Cross-functional collaboration resolves a workflow design issue.
`},
{id:'requirements',name:'需求工程',en:'Make needs clear and testable',icon:'book',color:'amber',level:'需求分析',description:'需求获取、规格说明、模型、验收标准、变更与双向追溯。',sources:['ireb','nasa'],rows:`
requirements engineering|需求工程|系统地发现、描述、检查和管理需求的工作领域，常写 RE。|Requirements engineering connects stakeholder needs with system development.
requirements engineer|需求工程师|参与需求获取、分析、表达与管理的专业岗位。|The requirements engineer clarifies how clinicians save measurements.
requirement|需求|对所需能力、性质或约束的表达。|Each requirement should communicate a clear need.
stakeholder|利益相关方；干系人|对系统有影响、受其影响或与其有相关利益的人或组织。|The stakeholder group includes clinicians and service engineers.
elicitation|需求获取|通过访谈、观察等方式发现显性和隐含需求。|Elicitation reveals workarounds used during examinations.
stakeholder interview|利益相关方访谈|通过有目的的交流理解相关方的目标、工作和问题。|A stakeholder interview explores how reports are reviewed.
workshop|工作坊；专题研讨会|让多方集中协作澄清问题或形成共同结论的活动。|The workshop aligns the team on the reporting workflow.
observation|观察|在实际情境中了解用户行为和工作环境的方法。|Observation reveals interruptions that users forgot to mention.
questionnaire|问卷|用一组问题收集目标群体信息的工具。|The questionnaire asks which export formats clinics use.
functional requirement|功能需求|描述系统应提供的行为、功能或处理能力。|The functional requirement states that a user can save a study.
quality requirement|质量需求|描述性能、可用性等质量特性的需求。|The quality requirement specifies a measurable response time.
constraint|约束|限制可选方案或实施方式的条件。|The connector type is a design constraint.
business requirement|业务需求|表达组织期望达到的业务目标或需要。|The business requirement is to reduce repeated data entry.
user requirement|用户需求|从用户角度表达所需支持或期望结果。|The user requirement asks for access to recent examinations.
system requirement|系统需求|针对完整系统所需行为、性质或限制的需求。|The system requirement describes how a study is stored.
non-functional requirement|非功能需求|常写 NFR，通常涵盖质量需求与约束；使用时应说明分类口径。|A non-functional requirement may address response time or compatibility.
requirements specification|需求规格说明|以约定结构描述一组需求的工作成果。|The requirements specification records the agreed behavior.
software requirements specification|软件需求规格说明书|常缩写为 SRS，描述软件功能、质量及相关限制。|The software requirements specification defines the export behavior.
acceptance criteria|验收标准|判断某条需求或条目能否被接受的具体条件。|The acceptance criteria describe the expected result of saving a study.
user story|用户故事|以用户、目标和价值等信息简洁表达需要的方式。|The user story explains why a clinician needs a recent-studies list.
use case|用例|围绕目标描述参与者与系统交互的一组情形。|The use case covers creating and saving a patient record.
scenario|场景；情景|描述特定条件下发生的一条具体交互或事件路径。|The scenario includes a network interruption during export.
actor|参与者|与所研究系统交互的外部角色、系统或设备。|The external archive is an actor in the export use case.
system boundary|系统边界|区分所研究系统内部与外部的界限。|The system boundary excludes the clinic's billing software.
context diagram|上下文图|展示系统与外部实体关系的概览图。|The context diagram shows the scanner and the image archive.
data flow diagram|数据流图|常缩写为 DFD，描述数据在处理、存储和外部实体间的流动。|The data flow diagram traces study data from entry to storage.
state machine|状态机|用状态和转换描述系统或对象的行为。|The state machine defines transitions between live and frozen imaging.
business rule|业务规则|对业务行为或判断作出规定的规则。|The business rule determines which fields a report must contain.
glossary|术语表|统一团队对专业词语含义的理解。|The glossary distinguishes a patient record from an imaging study.
ambiguity|歧义|一段表达存在多种合理解释的情况。|Replace the word fast to remove ambiguity.
consistency|一致性|相关需求或表达彼此协调、不矛盾的性质。|Check consistency between the save and export requirements.
completeness|完整性|相对于目标和边界，必要信息得到充分覆盖的程度。|Review completeness for both normal and error scenarios.
feasibility|可行性|在既定条件下能够实现的程度。|Engineering estimates help assess requirement feasibility.
verifiability|可验证性|能够通过明确方法获得符合性证据的性质。|A numerical limit improves the verifiability of a timing requirement.
traceability|可追溯性|能够沿关系追踪需求来源及其后续设计、实现和测试。|Traceability links the user need to the acceptance test.
traceability matrix|追溯矩阵|用表格展示需求与来源、设计或测试之间的关联。|The traceability matrix links each export requirement to test cases.
requirement identifier|需求标识符|用于稳定识别需求的唯一编号或名称。|Use the requirement identifier when reporting a test result.
requirement attribute|需求属性|附加在需求上的状态、来源、优先级等信息。|The requirement attribute records the responsible owner.
requirements baseline|需求基线|在某个时点经约定形成、作为后续控制参照的需求版本。|Changes after the requirements baseline follow the agreed process.
change request|变更请求|正式提出修改已约定内容的请求。|The change request adds a new report field.
change control|变更控制|评估、决策并记录变更的管理活动。|Change control records why the field was added.
impact analysis|影响分析|评估拟议变更对其他需求、设计、测试和计划的影响。|Impact analysis identifies the tests affected by a storage change.
requirements validation|需求确认|检查需求是否真实反映相关方所需目标与使用情境。|Requirements validation checks whether the proposed workflow meets user needs.
requirements verification|需求验证|在需求工作中，检查需求表达是否符合约定的质量和编写规则。|Requirements verification checks the specification for contradictions.
conflict resolution|冲突解决|识别并协调相关方之间或需求之间的分歧。|Conflict resolution balances different reporting preferences.
assumption|假设|在尚未充分证实时暂时采用、需要跟踪的前提。|The assumption is that the clinic has reliable network access.
dependency analysis|依赖分析|研究需求或任务之间的前置、关联和制约关系。|Dependency analysis shows that export requires a saved study.
acceptance testing|验收测试|依据验收条件评估系统是否可被预期接受的测试。|Acceptance testing uses the agreed report-saving scenarios.
requirement allocation|需求分配|将较高层需求分配给子系统或组成部分。|Requirement allocation assigns processing work to hardware and software.
requirements prioritization|需求优先级排序|依据价值、风险、依赖等因素确定需求的相对重要性。|Requirements prioritization places essential workflow needs first.
`}
);
window.SONO_WORDS=window.SONO_BOOKS.flatMap(book=>book.rows.trim().split('\n').map((row,i)=>{const [term,zh,note,example]=row.split('|');return {id:book.id+'-'+i,book:book.id,term,zh,note,example,sources:book.sources};}));
