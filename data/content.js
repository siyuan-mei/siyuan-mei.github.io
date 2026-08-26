window.SITE_CONTENT = {
  siteMeta: { lastUpdated: "August 2026" },

  profile: {
    name: "Siyuan Mei",
    title: "Ph.D. Student in Computer Science",
    affiliation: "FAU Erlangen-Nürnberg",
    affiliationUrl: "https://www.fau.eu/",
    email: "siyuan.mei@fau.de",
    avatar: "assets/img/profile-photo.jpg",
    wechat: {
      label: "WeChat",
      qr: "assets/img/wechat-qr.jpg",
      displayName: "Siyuan Mei",
      note: "Scan to connect on WeChat"
    },
    links: [
      { label: "Scholar", url: "https://scholar.google.com/citations?user=W_xPF2YAAAAJ&hl" },
      { label: "GitHub", url: "https://github.com/siyuan-mei" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/siyuan-mei-409353247/" },
      { label: "Homepage", url: "https://lme.tf.fau.de/persons/siyuan-mei/" },
      { label: "CV", url: "assets/files/curriculum_vitae.pdf" }
    ]
  },

  linkMap: {
    "FAU Erlangen-Nürnberg": "https://www.fau.eu/",
    "Pattern Recognition": "https://lme.tf.fau.de/",
    "Peking University Health Science Center": "https://www.bjmu.edu.cn/",
    "AIMI Lab": "https://pkuaimi.com/",
    "Yixing Huang": "https://pkuaimi.com/people/",
    "MICCAI 2026": "https://conferences.miccai.org/2026/en/",
    "MICCAI MIART Workshop 2026": "https://miart-workshop.github.io/",
    "Pattern Recognition 179 (2026), 113818": "https://doi.org/10.1016/j.patcog.2026.113818",
    "Journal of Medical Imaging 12(5), 054004 (2025)": "https://doi.org/10.1117/1.JMI.12.5.054004",
    "IEEE Transactions on Medical Imaging": "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=42",
    "MICCAI 2024": "https://conferences.miccai.org/2024/en/",
    "IEEE ISBI 2023": "https://biomedicalimaging.org/2023/"
  },

  about: [
    "I am a Ph.D. student in Computer Science at FAU Erlangen-Nürnberg, working in the Pattern Recognition Lab with Prof. Andreas Maier. My research focuses on medical AI and computer vision, with an emphasis on reconstruction, synthesis, segmentation, and registration.",
    "I also explore diffusion and flow-matching models, representation learning, vibe coding with LLMs, and practical agentic systems. I am currently visiting the AIMI Lab at Peking University Health Science Center with Prof. Yixing Huang."
  ],

  collaboration: "I am open to research conversations and collaborations in medical imaging, computer vision, and LLM-assisted software engineering.",

  researchInterests: [
    {
      title: "Medical AI",
      text: "Reconstruction, synthesis, segmentation, and registration for medical imaging.",
      papers: [
        { label: "JiR · MICCAI 2026", url: "https://github.com/siyuan-mei/JiR" },
        { label: "WING · MICCAI MIART 2026", url: "https://github.com/siyuan-mei/WING" },
        { label: "Speech-guided MRI · MICCAI 2026", url: "https://arxiv.org/abs/2605.18466" },
        { label: "DCD · MICCAI 2026", url: "https://arxiv.org/abs/2605.26382" }
      ]
    },
    {
      title: "Computer Vision",
      text: "Diffusion models, generative modeling, representation learning, and dense prediction.",
      papers: [
        { label: "ViT-Hook · Pattern Recognition", url: "https://doi.org/10.1016/j.patcog.2026.113818" },
        { label: "BigReg · Journal of Medical Imaging", url: "https://doi.org/10.1117/1.JMI.12.5.054004" }
      ]
    },
    {
      title: "Vibe Coding",
      text: "Software engineering workflows with LLMs and reproducible research tooling.",
      papers: [{ label: "Vibe Coding Slides", url: "https://github.com/PRLab-FAU/VibeCodingSlides" }]
    },
    {
      title: "LLMs & Agents",
      text: "Self-directed study of modern language models, reasoning, and agentic systems.",
      papers: [
        { label: "Stanford CS336", url: "https://stanford-cs336.github.io/spring2025/" },
        { label: "Stanford CS224N", url: "https://web.stanford.edu/class/cs224n/" },
        { label: "Stanford CS234", url: "https://web.stanford.edu/class/cs234/" }
      ]
    }
  ],

  news: [
    {
      year: "2026",
      items: [
        { date: "Aug", text: "One paper was accepted to the MICCAI MIART workshop.", highlightText: "MICCAI MIART workshop" },
        {
          date: "May",
          text: "Five papers were accepted to the MICCAI 2026 main conference, including three early accepts (top 9% among 4,601 submissions), with one Spotlight and two Oral presentations.",
          highlightText: "three early accepts (top 9% among 4,601 submissions), with one Spotlight and two Oral presentations"
        }
      ]
    }
  ],

  selectedPublications: [
    {
      title: "Time Matters: Rethinking Diffusion and Flow Models in One-Step Medical Image Translation",
      authors: "Siyuan Mei, Yanteng Zhang, Yan Xia, Qizhen Lan, Yipeng Sun, Siming Bayer, Zirong Li, Chengze Ye, Daiqi Liu, Xiaoqian Jiang, Fuxin Fan, Yixing Huang, Andreas Maier",
      venue: "MICCAI 2026",
      contribution: "First author",
      note: "Early Accept · Oral Presentation",
      image: "assets/img/time-matters.png",
      links: [{ label: "Code", url: "https://github.com/siyuan-mei/JiR" }]
    },
    {
      title: "Detail Consistent Stage-Wise Distillation for Efficient 3D MRI Segmentation",
      authors: "Mengchen Fan, Baocheng Geng, Xi Xiao, Tianyang Wang, Siyuan Mei, Pulin Che, Xiaoqian Jiang, Qizhen Lan",
      venue: "MICCAI 2026",
      contribution: "Co-author",
      note: "Early Accept · Spotlight Presentation",
      image: "assets/img/dcd.png",
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2605.26382" },
        { label: "Code", url: "https://github.com/ClinicaAlpha/DCD-3D-MedSeg" }
      ]
    },
    {
      title: "WING: A Window-Prior-Based Generative Network with Gated Inception for Cross-Modality CT Synthesis",
      authors: "Siyuan Mei, Yan Xia, Yipeng Sun, Siming Bayer, Zirong Li, Chengze Ye, Daiqi Liu, Fuxin Fan, Yixing Huang, Andreas Maier",
      venue: "MICCAI MIART Workshop 2026",
      contribution: "First author",
      note: "Accepted workshop paper",
      image: "assets/img/wing.png",
      links: [{ label: "Code", url: "https://github.com/siyuan-mei/WING" }]
    },
    {
      title: "Vision Transformer Hook for Dense Predictions",
      authors: "Siyuan Mei, Fuxin Fan, Yipeng Sun, Yixing Huang, Andreas Maier",
      venue: "Pattern Recognition 179 (2026), 113818",
      contribution: "First author",
      note: "Journal article",
      image: "assets/img/vithook.png",
      links: [{ label: "DOI", url: "https://doi.org/10.1016/j.patcog.2026.113818" }]
    },
    {
      title: "BigReg: An Efficient Registration Pipeline for High-Resolution X-Ray and Light-Sheet Fluorescence Microscopy",
      authors: "Siyuan Mei, Fuxin Fan, Mareike Thies, Mingxuan Gu, Fabian Wagner, Oliver Aust, Ina Erceg, Zeynab Mirzaei, Georgiana Neag, Yipeng Sun, Yixing Huang, Andreas Maier",
      venue: "Journal of Medical Imaging 12(5), 054004 (2025)",
      contribution: "First author",
      note: "Featured Paper",
      image: "assets/img/bigreg.png",
      links: [
        { label: "DOI", url: "https://doi.org/10.1117/1.JMI.12.5.054004" },
        { label: "arXiv", url: "https://arxiv.org/abs/2404.14807" }
      ]
    }
  ],

  otherPublications: [
    {
      year: "2026",
      items: [
        {
          title: "Speech-Guided Multimodal Learning for Vocal Tract Segmentation in Real-Time MRI",
          authors: "Daiqi Liu, Lukas Mulzer, Md Hasan, Nyvenn de Castro, Fangxu Xing, Xingjian Kang, Chengze Ye, Siyuan Mei, Yipeng Sun, Tomás Arias-Vergara, Jana Hutter, Jonghye Woo, Andreas Maier, Paula Andrea Pérez-Toro",
          venue: "MICCAI 2026 · Oral Presentation",
          links: [{ label: "arXiv", url: "https://arxiv.org/abs/2605.18466" }]
        },
        {
          title: "TCCT: Trajectory-Conditioned CBCT Reconstruction for Sinusoidal Non-Circular Orbits with a Fourier Neural Operator",
          authors: "Siyuan Mei · co-author",
          venue: "MICCAI 2026 BIC-MAC Challenge · Poster",
          links: []
        },
        {
          title: "Filter2Noise: A Framework for Interpretable and Zero-Shot Low-Dose CT Image Denoising",
          authors: "Yipeng Sun, Siyuan Mei, et al.",
          venue: "Journal of Medical Imaging 13(2), 024004",
          links: [{ label: "DOI", url: "https://doi.org/10.1117/1.JMI.13.2.024004" }]
        },
        {
          title: "Robustness and Stability Analysis of Differentiable Shift-Variant FBP for Cone-Beam CT under Challenging Acquisition Settings",
          authors: "Chengze Ye, Siyuan Mei, et al.",
          venue: "Machine Learning for Biomedical Imaging (2026)",
          links: [{ label: "DOI", url: "https://doi.org/10.59275/j.melba.2026-252c" }]
        },
        {
          title: "Analyzing and Adapting Diffusion Segmentation Behavior under Distribution Shifts",
          authors: "Siyuan Mei, et al.",
          venue: "Biomedical Signal Processing and Control 112 (2026), 108619",
          links: [{ label: "DOI", url: "https://doi.org/10.1016/j.bspc.2025.108619" }]
        }
      ]
    },
    {
      year: "2025",
      items: [
        {
          title: "A Gradient-Based Approach to Fast and Accurate Head Motion Compensation in Cone-Beam CT",
          authors: "Mareike Thies, Fabian Wagner, Noah Maul, Haijun Yu, Manuela Goldmann, Linda-Sophie Schneider, Mingxuan Gu, Siyuan Mei, Lukas Folle, Alexander Preuhs, Michael Manhart, Andreas Maier",
          venue: "IEEE Transactions on Medical Imaging",
          links: [{ label: "DOI", url: "https://doi.org/10.1109/TMI.2024.3474250" }]
        },
        {
          title: "DRACO: Differentiable Reconstruction for Arbitrary CBCT Orbits",
          authors: "Chengze Ye, Siyuan Mei, et al.",
          venue: "Physics in Medicine and Biology 70 (2025), 075005",
          links: [{ label: "DOI", url: "https://doi.org/10.1088/1361-6560/adbb50" }]
        }
      ]
    },
    {
      year: "2024",
      items: [
        {
          title: "Unsupervised Domain Adaptation Using Soft-Labeled Contrastive Learning with Reversed Monte Carlo Method for Cardiac Image Segmentation",
          authors: "Mingxuan Gu, Mareike Thies, Siyuan Mei, Fabian Wagner, Mingcheng Fan, Yipeng Sun, Zhaoya Pan, Sulaiman Vesal, Ronak Kosti, Dennis Possart, Jonas Utz, Andreas Maier",
          venue: "MICCAI 2024",
          links: [{ label: "DOI", url: "https://doi.org/10.1007/978-3-031-72114-4_65" }]
        },
        {
          title: "No-New-Denoiser: A Critical Analysis of Diffusion Models for Medical Image Denoising",
          authors: "Laura Pfaff, Fabian Wagner, Nastassia Vysotskaya, Mareike Thies, Noah Maul, Siyuan Mei, Tobias Würfl, Andreas Maier",
          venue: "MICCAI 2024",
          links: [{ label: "Open access", url: "https://papers.miccai.org/miccai-2024/567-Paper2146.html" }]
        },
        {
          title: "Generative Drifting for Conditional Medical Image Generation",
          authors: "Zirong Li, Siyuan Mei, Weiwen Wu, Andreas Maier, Lina Gölz, Yan Xia",
          venue: "arXiv preprint (2026)",
          links: [{ label: "arXiv", url: "https://arxiv.org/abs/2604.19736" }]
        }
      ]
    }
  ],

  education: [
    {
      title: "Ph.D. in Computer Science",
      organization: "FAU Erlangen-Nürnberg",
      period: "2023 - 2027",
      location: "Erlangen, Germany",
      detail: "Supervisor: Prof. Andreas Maier."
    },
    {
      title: "Visiting Scholar",
      organization: "Peking University Health Science Center · AIMI Lab",
      period: "May - Oct. 2026",
      location: "Beijing, China",
      detail: "Supervisor: Prof. Yixing Huang."
    },
    {
      title: "M.Sc. in Medical Engineering",
      organization: "FAU Erlangen-Nürnberg",
      period: "2020 - 2023",
      location: "Erlangen, Germany",
      detail: ""
    },
    {
      title: "B.Eng. in Automation",
      organization: "Zhejiang University of Science and Technology",
      period: "2016 - 2020",
      location: "Hangzhou, China",
      detail: ""
    }
  ],

  experience: [
    {
      title: "Ph.D. Student",
      organization: "FAU Erlangen-Nürnberg · Pattern Recognition Lab",
      period: "2023 - 2027",
      location: "Erlangen, Germany",
      detail: "Supervisor: Prof. Andreas Maier.",
      summary: "Fully funded through the ERC 4D Nanoscope project. Research on registration, medical AI, computer vision, foundation-model adaptation, GANs, diffusion and flow-matching models; teaching Flat-panel CT Reconstruction and Vibe Coding: Software Engineering with LLMs."
    },
    {
      title: "Visiting Scholar",
      organization: "Peking University Health Science Center · AIMI Lab",
      period: "May - Oct. 2026",
      location: "Beijing, China",
      detail: "Supervisor: Prof. Yixing Huang. 240 Pathology Building, No. 38 Xueyuan Road, Haidian District, Beijing, China.",
      summary: "Participated in the MICCAI BIC-MAC Challenge and trained a multimodal-to-CT generative model for PET attenuation correction; ranked first on the validation-set CT metric. Received training in clinical CT applications and workflows, visited the ICT Center in Chongqing, and attended MISC 2026 at Tsinghua University."
    }
  ],

  awards: [
    "[2025] 1st place in Task 2 and 4th place in Task 1, MICCAI SynthRAD2025 Challenge.",
    "[2023 - 2027] Fully funded Ph.D. through the ERC 4D Nanoscope project at FAU."
  ],

  serviceGroups: [
    {
      title: "Journal Service",
      items: [
        { label: "Pattern Recognition · Reviewer", url: "https://www.sciencedirect.com/journal/pattern-recognition" },
        { label: "Journal of Medical Imaging · Technical Editor", url: "https://www.spiedigitallibrary.org/journals/journal-of-medical-imaging" },
        { label: "Machine Learning for Biomedical Imaging · Reviewer", url: "https://www.melba-journal.org/" }
      ]
    },
    {
      title: "Conference Service",
      items: [{ label: "MICCAI · Reviewer", url: "https://conferences.miccai.org/" }]
    }
  ]
};
