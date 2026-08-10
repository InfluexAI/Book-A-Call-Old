/* @ds-bundle: {"format":3,"namespace":"InfluexDesignSystem_8ec328","components":[],"sourceHashes":{"ApplyForm.jsx":"9e4a8064aa3c","ApplyWizard.jsx":"8a1dfa08056b","CEOIntro.jsx":"512e3d4fc0a9","Closing.jsx":"b096e26e521d","DTAffordable.jsx":"d50855e22c3e","DTCost.jsx":"c8e2d9e33aa4","DTEvolving.jsx":"72a9059b4028","DTExpect.jsx":"8e4819246d52","DTFaq.jsx":"1869fb38ad0a","DTHero.jsx":"458613a756f2","DTIconsStrip.jsx":"a01d3260c2a4","DTNav.jsx":"52cfa14e07d0","DTOtherworld.jsx":"6a6a3e497d4d","DTPackages.jsx":"15f57a427460","DTPerfectFor.jsx":"2767c09e2339","DTPricingHow.jsx":"94cfb095e0ad","DTSocial.jsx":"3e191a011eeb","DTTweaks.jsx":"96da0fbfe8eb","DTWeServe.jsx":"635a63615442","DTWhich.jsx":"6056979c3b95","DTWhyCreate.jsx":"3f8f08690108","FAQ.jsx":"0f10287573df","FitAssessment.jsx":"893f6167ae0b","Hero.jsx":"8103bcc02978","HowItWorks.jsx":"7f969616c425","Nav.jsx":"07ea4baa05c0","Outcomes.jsx":"2d97a6e01584","PartnerGrid.jsx":"7c1ce019d951","PartnersCTA.jsx":"75fbb165451e","PartnersHero.jsx":"b112190ea477","PartnersTweaks.jsx":"b8ab9b785002","Positioning.jsx":"5527af2aeb86","Pricing.jsx":"8263bb964c9d","Standard.jsx":"e5edfab487ee","Steps.jsx":"ea5ba644b27a","TrustedBy.jsx":"41745215be15","Tweaks.jsx":"f712bbe5cc41","WhoFor.jsx":"bb0f23aa0824","admin.jsx":"66b52fcff80b","app.jsx":"6ebaac72a767","canvas.jsx":"cbbb3e361b16","dashboard.jsx":"ea1e3f2d4dd5","login.jsx":"2e4729c73383","state.jsx":"6d0c39971880","ui_kits/website/BookingSection.jsx":"8d915601f9ae","ui_kits/website/EssenceSection.jsx":"81cfc7664911","ui_kits/website/FeaturedIn.jsx":"f5ad26b2093d","ui_kits/website/Footer.jsx":"0a8a4e69e045","ui_kits/website/Hero.jsx":"3df559d94b26","ui_kits/website/Nav.jsx":"4c0ee2fbb844","ui_kits/website/ProofSection.jsx":"8e4fe6646bd5","ui_kits/website/TrustedBy.jsx":"2ebd797ef228"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.InfluexDesignSystem_8ec328 = window.InfluexDesignSystem_8ec328 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ApplyForm.jsx
try { (() => {
// ApplyForm
const ApplyForm = () => {
  const [state, setState] = React.useState({
    first: '',
    last: '',
    email: '',
    phone: '',
    company: '',
    revenue: '',
    url: '',
    vision: ''
  });
  const [sent, setSent] = React.useState(false);
  const up = k => e => setState({
    ...state,
    [k]: e.target.value
  });
  const submit = e => {
    e.preventDefault();
    setSent(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "ap-form-sec",
    id: "apply-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-form-bloom"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ap-form-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-form-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-form-kicker"
  }, "APPLICATION \xB7 STEP 1 OF 3"), /*#__PURE__*/React.createElement("h2", {
    className: "ap-form-h2"
  }, "Ready to book your ", /*#__PURE__*/React.createElement("b", null, "CEO Creative Clarity Consult?")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.65,
      color: 'rgba(254,247,223,0.7)',
      margin: '0 0 8px'
    }
  }, "Start your application below. We review every submission personally and respond within 1\u20132 business days with your calendar link."), /*#__PURE__*/React.createElement("ul", {
    className: "ap-form-bullets"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "ap-form-bullet-num"
  }, "01"), /*#__PURE__*/React.createElement("span", null, "We review your application personally.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "ap-form-bullet-num"
  }, "02"), /*#__PURE__*/React.createElement("span", null, "You'll receive a calendar link within 1\u20132 business days.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "ap-form-bullet-num"
  }, "03"), /*#__PURE__*/React.createElement("span", null, "$200 deposit reserves your time (75% off, refundable).")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "ap-form-bullet-num"
  }, "04"), /*#__PURE__*/React.createElement("span", null, "Deposit is applied to any engagement if we move forward.")))), /*#__PURE__*/React.createElement("form", {
    className: "ap-form-right",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-form-fields"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-form-row-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-field"
  }, /*#__PURE__*/React.createElement("label", null, "First Name*"), /*#__PURE__*/React.createElement("input", {
    required: true,
    value: state.first,
    onChange: up('first'),
    placeholder: "Your first name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ap-field"
  }, /*#__PURE__*/React.createElement("label", null, "Last Name*"), /*#__PURE__*/React.createElement("input", {
    required: true,
    value: state.last,
    onChange: up('last'),
    placeholder: "Your last name"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ap-form-row-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-field"
  }, /*#__PURE__*/React.createElement("label", null, "Email*"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    value: state.email,
    onChange: up('email'),
    placeholder: "you@domain.com"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ap-field"
  }, /*#__PURE__*/React.createElement("label", null, "Phone"), /*#__PURE__*/React.createElement("input", {
    value: state.phone,
    onChange: up('phone'),
    placeholder: "+1 (555) 000-0000"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ap-field"
  }, /*#__PURE__*/React.createElement("label", null, "Company / Brand*"), /*#__PURE__*/React.createElement("input", {
    required: true,
    value: state.company,
    onChange: up('company'),
    placeholder: "Brand name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ap-form-row-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-field"
  }, /*#__PURE__*/React.createElement("label", null, "Annual Revenue*"), /*#__PURE__*/React.createElement("select", {
    required: true,
    value: state.revenue,
    onChange: up('revenue')
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select a range"), /*#__PURE__*/React.createElement("option", null, "Under $500K"), /*#__PURE__*/React.createElement("option", null, "$500K \u2013 $1M"), /*#__PURE__*/React.createElement("option", null, "$1M \u2013 $5M"), /*#__PURE__*/React.createElement("option", null, "$5M \u2013 $10M"), /*#__PURE__*/React.createElement("option", null, "$10M+"))), /*#__PURE__*/React.createElement("div", {
    className: "ap-field"
  }, /*#__PURE__*/React.createElement("label", null, "Current Website"), /*#__PURE__*/React.createElement("input", {
    value: state.url,
    onChange: up('url'),
    placeholder: "https://\u2026"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ap-field"
  }, /*#__PURE__*/React.createElement("label", null, "What's the vision you want your brand to express?"), /*#__PURE__*/React.createElement("textarea", {
    rows: "3",
    value: state.vision,
    onChange: up('vision'),
    placeholder: "A few sentences \u2014 the essence, the audience, the authority you want to amplify."
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: `ap-pill ap-pill--filled ap-form-submit`
  }, sent ? 'APPLICATION SENT ✓' : 'CONTINUE TO STEP 2 →'), /*#__PURE__*/React.createElement("div", {
    className: "ap-form-sub"
  }, "Your information is confidential. We'll never share or sell it.")))));
};
window.ApplyForm = ApplyForm;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ApplyForm.jsx", error: String((e && e.message) || e) }); }

// ApplyWizard.jsx
try { (() => {
// ApplyWizard.jsx — multi-step partner application
const SERVICES = ['Advertising', 'Video Marketing', 'Social Media', 'Consulting', 'Copywriting', 'AI Consulting', 'Automation', 'CRM / GoHighLevel', 'Web Development', 'SEO', 'Email Marketing', 'PR', 'Analytics', 'Other'];
const STEPS = [{
  k: 'Company',
  t: 'Company'
}, {
  k: 'Contact',
  t: 'Contact'
}, {
  k: 'Qualification',
  t: 'Qualification'
}, {
  k: 'Services',
  t: 'Services'
}, {
  k: 'Referral',
  t: 'Referral'
}, {
  k: 'Review',
  t: 'Review'
}];
const ApplyWizard = () => {
  const [step, setStep] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const [s, setS] = React.useState({
    company: '',
    website: '',
    size: '',
    years: '',
    contactName: '',
    role: '',
    email: '',
    phone: '',
    pref: '',
    description: '',
    strengths: '',
    portfolio: '',
    services: [],
    commission: '',
    openRefer: '',
    openCollab: ''
  });
  const up = k => e => setS({
    ...s,
    [k]: e.target.value
  });
  const toggle = svc => setS({
    ...s,
    services: s.services.includes(svc) ? s.services.filter(x => x !== svc) : [...s.services, svc]
  });
  const set = (k, v) => setS({
    ...s,
    [k]: v
  });
  const Nav = () => /*#__PURE__*/React.createElement("div", {
    className: "pn-wiz-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "counter"
  }, "Step ", Math.min(step + 1, STEPS.length), " of ", STEPS.length), /*#__PURE__*/React.createElement("div", {
    className: "pn-wiz-nav-right"
  }, step > 0 && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ap-pill",
    onClick: () => setStep(step - 1)
  }, "BACK"), step < STEPS.length - 1 && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ap-pill ap-pill--filled",
    onClick: () => setStep(step + 1)
  }, "CONTINUE \u2192"), step === STEPS.length - 1 && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ap-pill ap-pill--filled",
    onClick: () => setDone(true)
  }, "SUBMIT APPLICATION")));
  if (done) {
    return /*#__PURE__*/React.createElement("section", {
      className: "pn-apply",
      id: "apply"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pn-apply-bloom-a"
    }), /*#__PURE__*/React.createElement("div", {
      className: "pn-apply-bloom-b"
    }), /*#__PURE__*/React.createElement("div", {
      className: "pn-apply-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pn-wizard"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pn-wiz-side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pn-wiz-side-kicker"
    }, "Application"), /*#__PURE__*/React.createElement("h3", {
      className: "pn-wiz-side-title"
    }, "Received \u2014 thank you.")), /*#__PURE__*/React.createElement("div", {
      className: "pn-wiz-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pn-wiz-done"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mark"
    }, "\u2713"), /*#__PURE__*/React.createElement("h3", null, "Your application is ", /*#__PURE__*/React.createElement("b", null, "with us.")), /*#__PURE__*/React.createElement("p", null, "We read every submission personally. If we see the fit, you'll hear from Influex within ten business days with next steps or a calendar link. If it isn't the moment, we'll say so clearly \u2014 and with respect for your craft."))))));
  }
  return /*#__PURE__*/React.createElement("section", {
    className: "pn-apply",
    id: "apply"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-apply-bloom-a"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pn-apply-bloom-b"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pn-apply-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-meta-row",
    style: {
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("hr", {
    className: "rule"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Chapter 05 \xA0\xB7\xA0 Application"), /*#__PURE__*/React.createElement("span", {
    className: "lbl lbl--r"
  }, "Preferred Partner Network")), /*#__PURE__*/React.createElement("div", {
    className: "pn-apply-hd"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-apply-kicker"
  }, "Apply to the network"), /*#__PURE__*/React.createElement("h2", {
    className: "pn-apply-h2"
  }, "A short, ", /*#__PURE__*/React.createElement("b", null, "deliberate"), " application.")), /*#__PURE__*/React.createElement("div", {
    className: "pn-wizard"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "pn-wiz-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-wiz-side-kicker"
  }, "Application"), /*#__PURE__*/React.createElement("h3", {
    className: "pn-wiz-side-title"
  }, "Influex Preferred Partner Network"), /*#__PURE__*/React.createElement("ul", {
    className: "pn-wiz-progress"
  }, STEPS.map((st, i) => /*#__PURE__*/React.createElement("li", {
    key: st.k,
    className: i === step ? 'active' : i < step ? 'done' : '',
    onClick: () => setStep(i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, i < step ? '\u2713' : String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, st.k)))), /*#__PURE__*/React.createElement("div", {
    className: "pn-wiz-side-help"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "A note from Influex"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "Every field you complete here is read by a human. Be direct. We prefer a short, honest application to a long, hedged one."))), /*#__PURE__*/React.createElement("div", {
    className: "pn-wiz-body"
  }, step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "pn-wiz-step-label"
  }, "Chapter 01 \xA0/\xA0 Company"), /*#__PURE__*/React.createElement("h3", {
    className: "pn-wiz-step-title"
  }, "Tell us about your firm."), /*#__PURE__*/React.createElement("p", {
    className: "pn-wiz-step-sub"
  }, "Who you are, what you do, and where we can see it live."), /*#__PURE__*/React.createElement("div", {
    className: "pn-wiz-fields"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-wiz-row-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-field"
  }, /*#__PURE__*/React.createElement("label", null, "Company name *"), /*#__PURE__*/React.createElement("input", {
    required: true,
    value: s.company,
    onChange: up('company'),
    placeholder: "Your company"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pn-field"
  }, /*#__PURE__*/React.createElement("label", null, "Website *"), /*#__PURE__*/React.createElement("input", {
    required: true,
    value: s.website,
    onChange: up('website'),
    placeholder: "https://\u2026"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pn-wiz-row-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-field"
  }, /*#__PURE__*/React.createElement("label", null, "Company size ", /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, "optional")), /*#__PURE__*/React.createElement("select", {
    value: s.size,
    onChange: up('size')
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select a range"), /*#__PURE__*/React.createElement("option", null, "Solo / freelance"), /*#__PURE__*/React.createElement("option", null, "2\u20135"), /*#__PURE__*/React.createElement("option", null, "6\u201315"), /*#__PURE__*/React.createElement("option", null, "16\u201350"), /*#__PURE__*/React.createElement("option", null, "50+"))), /*#__PURE__*/React.createElement("div", {
    className: "pn-field"
  }, /*#__PURE__*/React.createElement("label", null, "Years in business ", /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, "optional")), /*#__PURE__*/React.createElement("select", {
    value: s.years,
    onChange: up('years')
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select a range"), /*#__PURE__*/React.createElement("option", null, "Under 1 year"), /*#__PURE__*/React.createElement("option", null, "1\u20133 years"), /*#__PURE__*/React.createElement("option", null, "4\u20137 years"), /*#__PURE__*/React.createElement("option", null, "8\u201315 years"), /*#__PURE__*/React.createElement("option", null, "15+ years")))))), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "pn-wiz-step-label"
  }, "Chapter 02 \xA0/\xA0 Contact"), /*#__PURE__*/React.createElement("h3", {
    className: "pn-wiz-step-title"
  }, "Who runs the relationship."), /*#__PURE__*/React.createElement("p", {
    className: "pn-wiz-step-sub"
  }, "One decision-maker we can speak with directly."), /*#__PURE__*/React.createElement("div", {
    className: "pn-wiz-fields"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-wiz-row-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-field"
  }, /*#__PURE__*/React.createElement("label", null, "Full name *"), /*#__PURE__*/React.createElement("input", {
    required: true,
    value: s.contactName,
    onChange: up('contactName'),
    placeholder: "First Last"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pn-field"
  }, /*#__PURE__*/React.createElement("label", null, "Role ", /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, "optional")), /*#__PURE__*/React.createElement("input", {
    value: s.role,
    onChange: up('role'),
    placeholder: "Founder, CEO, Head of\u2026"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pn-wiz-row-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-field"
  }, /*#__PURE__*/React.createElement("label", null, "Email *"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    value: s.email,
    onChange: up('email'),
    placeholder: "you@domain.com"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pn-field"
  }, /*#__PURE__*/React.createElement("label", null, "Phone *"), /*#__PURE__*/React.createElement("input", {
    required: true,
    value: s.phone,
    onChange: up('phone'),
    placeholder: "+1 (555) 000-0000"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pn-field"
  }, /*#__PURE__*/React.createElement("label", null, "Preferred contact method ", /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, "optional")), /*#__PURE__*/React.createElement("div", {
    className: "pn-radio-row"
  }, ['Email', 'Phone', 'Text', 'Either'].map(v => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: v,
    className: `pn-radio ${s.pref === v ? 'active' : ''}`,
    onClick: () => set('pref', v)
  }, v)))))), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "pn-wiz-step-label"
  }, "Chapter 03 \xA0/\xA0 Qualification"), /*#__PURE__*/React.createElement("h3", {
    className: "pn-wiz-step-title"
  }, "Why we should refer to you."), /*#__PURE__*/React.createElement("p", {
    className: "pn-wiz-step-sub"
  }, "Short, specific, and in your own words. This is what we actually read."), /*#__PURE__*/React.createElement("div", {
    className: "pn-wiz-fields"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-field"
  }, /*#__PURE__*/React.createElement("label", null, "What you do *"), /*#__PURE__*/React.createElement("textarea", {
    required: true,
    rows: "3",
    value: s.description,
    onChange: up('description'),
    placeholder: "In two or three sentences: what you do, who you do it for, and what a typical engagement looks like."
  })), /*#__PURE__*/React.createElement("div", {
    className: "pn-field"
  }, /*#__PURE__*/React.createElement("label", null, "What makes you a great partner *"), /*#__PURE__*/React.createElement("textarea", {
    required: true,
    rows: "3",
    value: s.strengths,
    onChange: up('strengths'),
    placeholder: "The one or two things your clients say set you apart."
  }), /*#__PURE__*/React.createElement("span", {
    className: "hint"
  }, "We're looking for craft, character, and client experience \u2014 not a pitch.")), /*#__PURE__*/React.createElement("div", {
    className: "pn-field"
  }, /*#__PURE__*/React.createElement("label", null, "Portfolio / case studies ", /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, "optional")), /*#__PURE__*/React.createElement("input", {
    value: s.portfolio,
    onChange: up('portfolio'),
    placeholder: "One or two links, comma separated"
  })))), step === 3 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "pn-wiz-step-label"
  }, "Chapter 04 \xA0/\xA0 Services"), /*#__PURE__*/React.createElement("h3", {
    className: "pn-wiz-step-title"
  }, "Where you fit in the network."), /*#__PURE__*/React.createElement("p", {
    className: "pn-wiz-step-sub"
  }, "Select every discipline you deliver at a best-in-class level \u2014 not adjacent services you'd take on."), /*#__PURE__*/React.createElement("div", {
    className: "pn-wiz-fields"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-field"
  }, /*#__PURE__*/React.createElement("label", null, "Service categories ", /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, "select all that apply")), /*#__PURE__*/React.createElement("div", {
    className: "pn-chips"
  }, SERVICES.map(svc => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: svc,
    className: `pn-chip ${s.services.includes(svc) ? 'active' : ''}`,
    onClick: () => toggle(svc)
  }, svc))), /*#__PURE__*/React.createElement("span", {
    className: "hint"
  }, s.services.length === 0 ? 'Nothing selected.' : `${s.services.length} selected.`)))), step === 4 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "pn-wiz-step-label"
  }, "Chapter 05 \xA0/\xA0 Referral"), /*#__PURE__*/React.createElement("h3", {
    className: "pn-wiz-step-title"
  }, "How we'll work together."), /*#__PURE__*/React.createElement("p", {
    className: "pn-wiz-step-sub"
  }, "The Preferred Partner Network is commission-based and reciprocal by design."), /*#__PURE__*/React.createElement("div", {
    className: "pn-wiz-fields"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-field"
  }, /*#__PURE__*/React.createElement("label", null, "Commission on referred work *"), /*#__PURE__*/React.createElement("div", {
    className: "pn-radio-row"
  }, ['Yes', 'No', 'Open to discuss'].map(v => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: v,
    className: `pn-radio ${s.commission === v ? 'active' : ''}`,
    onClick: () => set('commission', v)
  }, v)))), /*#__PURE__*/React.createElement("div", {
    className: "pn-field"
  }, /*#__PURE__*/React.createElement("label", null, "Open to referring Influex *"), /*#__PURE__*/React.createElement("div", {
    className: "pn-radio-row"
  }, ['Yes', 'No', 'Situationally'].map(v => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: v,
    className: `pn-radio ${s.openRefer === v ? 'active' : ''}`,
    onClick: () => set('openRefer', v)
  }, v)))), /*#__PURE__*/React.createElement("div", {
    className: "pn-field"
  }, /*#__PURE__*/React.createElement("label", null, "Open to collaboration on joint engagements ", /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, "optional")), /*#__PURE__*/React.createElement("div", {
    className: "pn-radio-row"
  }, ['Yes', 'No', 'Case by case'].map(v => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: v,
    className: `pn-radio ${s.openCollab === v ? 'active' : ''}`,
    onClick: () => set('openCollab', v)
  }, v)))))), step === 5 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "pn-wiz-step-label"
  }, "Chapter 06 \xA0/\xA0 Review & Submit"), /*#__PURE__*/React.createElement("h3", {
    className: "pn-wiz-step-title"
  }, "One last look."), /*#__PURE__*/React.createElement("p", {
    className: "pn-wiz-step-sub"
  }, "We'll respond within ten business days."), /*#__PURE__*/React.createElement("div", {
    className: "pn-wiz-fields"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-wiz-row-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-field"
  }, /*#__PURE__*/React.createElement("label", null, "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--fg-1)',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      paddingTop: 6
    }
  }, s.company || /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'rgba(254,247,223,0.3)'
    }
  }, "\u2014"))), /*#__PURE__*/React.createElement("div", {
    className: "pn-field"
  }, /*#__PURE__*/React.createElement("label", null, "Website"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--fg-1)',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      paddingTop: 6
    }
  }, s.website || /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'rgba(254,247,223,0.3)'
    }
  }, "\u2014")))), /*#__PURE__*/React.createElement("div", {
    className: "pn-wiz-row-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-field"
  }, /*#__PURE__*/React.createElement("label", null, "Contact"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--fg-1)',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      paddingTop: 6
    }
  }, s.contactName || /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'rgba(254,247,223,0.3)'
    }
  }, "\u2014"))), /*#__PURE__*/React.createElement("div", {
    className: "pn-field"
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--fg-1)',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      paddingTop: 6
    }
  }, s.email || /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'rgba(254,247,223,0.3)'
    }
  }, "\u2014")))), /*#__PURE__*/React.createElement("div", {
    className: "pn-field"
  }, /*#__PURE__*/React.createElement("label", null, "Services"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 8
    }
  }, s.services.length ? s.services.map(x => /*#__PURE__*/React.createElement("span", {
    key: x,
    className: "pn-chip active",
    style: {
      pointerEvents: 'none'
    }
  }, x)) : /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'rgba(254,247,223,0.3)',
      fontFamily: 'var(--font-body)',
      fontSize: 14
    }
  }, "None selected"))), /*#__PURE__*/React.createElement("div", {
    className: "pn-field"
  }, /*#__PURE__*/React.createElement("label", null, "Commission / Referrals / Collaboration"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--fg-1)',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      paddingTop: 6,
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Commission: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--color-champagne)'
    }
  }, s.commission || '—')), /*#__PURE__*/React.createElement("span", null, "Refers Influex: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--color-champagne)'
    }
  }, s.openRefer || '—')), /*#__PURE__*/React.createElement("span", null, "Collaboration: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--color-champagne)'
    }
  }, s.openCollab || '—')))))), /*#__PURE__*/React.createElement(Nav, null)))));
};
window.ApplyWizard = ApplyWizard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ApplyWizard.jsx", error: String((e && e.message) || e) }); }

// CEOIntro.jsx
try { (() => {
// CEOIntro — light section
const CEOIntro = () => /*#__PURE__*/React.createElement("section", {
  className: "ap-ceo ap-light"
}, /*#__PURE__*/React.createElement("div", {
  className: "ap-ceo-grid"
}, /*#__PURE__*/React.createElement("div", {
  className: "ap-ceo-portrait"
}, /*#__PURE__*/React.createElement("div", {
  className: "ap-ceo-portrait-sig"
}, "Dmitriy"), /*#__PURE__*/React.createElement("div", {
  className: "ap-ceo-portrait-badge"
}, "Chief Expression Officer")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "ap-ceo-eyebrow"
}, "HELLO FROM OUR FOUNDER"), /*#__PURE__*/React.createElement("h2", {
  className: "ap-ceo-h2"
}, "Before a multi-month journey, let's spend an hour. ", /*#__PURE__*/React.createElement("b", null, "Borrow my brain for your brand.")), /*#__PURE__*/React.createElement("p", {
  className: "ap-ceo-body"
}, "I'm ", /*#__PURE__*/React.createElement("b", null, "Dmitriy Kozlov"), " \u2014 CEO (Chief Expression Officer) and founder at Influex. You likely found us through one of the 200+ iconic websites we've built for top personal-development, education, and business-services brands."), /*#__PURE__*/React.createElement("p", {
  className: "ap-ceo-body"
}, "We're just as ", /*#__PURE__*/React.createElement("b", null, "selective"), " with our clients as you are with who you trust with your online presence. Before we both commit to a multi-month journey and a multiple-five-figure investment, let's start with an hour and a few hundred dollars \u2014 so we both know, with certainty, that working together will create ", /*#__PURE__*/React.createElement("b", null, "exponential value.")), /*#__PURE__*/React.createElement("div", {
  className: "ap-ceo-sigs"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "ap-ceo-sig-name"
}, "DMITRIY KOZLOV"), /*#__PURE__*/React.createElement("div", {
  className: "ap-ceo-sig-role"
}, "Chief Expression Officer \xB7 Influex"))))));
window.CEOIntro = CEOIntro;
})(); } catch (e) { __ds_ns.__errors.push({ path: "CEOIntro.jsx", error: String((e && e.message) || e) }); }

// Closing.jsx
try { (() => {
// Closing quote + Footer
const Closing = () => /*#__PURE__*/React.createElement("section", {
  className: "ap-closing"
}, /*#__PURE__*/React.createElement("div", {
  className: "ap-closing-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "ap-closing-mark"
}, "\""), /*#__PURE__*/React.createElement("p", {
  className: "ap-closing-quote"
}, "Dmitriy and his team are the ", /*#__PURE__*/React.createElement("b", null, "most creative web designers available"), " to Genius Network Members."), /*#__PURE__*/React.createElement("div", {
  className: "ap-closing-attribution"
}, /*#__PURE__*/React.createElement("div", {
  className: "ap-closing-avatar"
}, "JP"), /*#__PURE__*/React.createElement("div", {
  style: {
    textAlign: 'left'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ap-closing-name"
}, "JOE POLISH"), /*#__PURE__*/React.createElement("div", {
  className: "ap-closing-role"
}, "Founder \xB7 GeniusNetwork.com")))));
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  className: "ap-footer"
}, /*#__PURE__*/React.createElement("div", {
  className: "ap-footer-brand"
}, /*#__PURE__*/React.createElement("span", {
  className: "ap-brand-gold"
}, "INFLUE"), /*#__PURE__*/React.createElement("span", {
  className: "ap-brand-x"
}, "X")), /*#__PURE__*/React.createElement("div", {
  className: "ap-footer-tag"
}, "EXPRESS YOUR ESSENCE \xB7 AMPLIFY YOUR AUTHORITY"), /*#__PURE__*/React.createElement("div", {
  className: "ap-footer-links"
}, /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Who We Are"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Portfolio"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Process"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Press"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Story Course")), /*#__PURE__*/React.createElement("div", {
  className: "ap-footer-meta"
}, "Copyright Purpose INspired Marketing LLC \xB7 Terms of Use \xB7 Privacy Policy"));
window.Closing = Closing;
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "Closing.jsx", error: String((e && e.message) || e) }); }

// DTAffordable.jsx
try { (() => {
// DTAffordable.jsx — section 5
const FEATURES = [{
  t: 'No onboarding tax',
  b: 'We already know your brand inside and out — no ramp-up, no re-education.'
}, {
  t: 'Dedicated team',
  b: 'Designers, developers, copywriters and brand strategists, on standby for you.'
}, {
  t: 'Flex Funds',
  b: 'Buy credits in blocks. Roll over month to month. They never expire.'
}, {
  t: 'Up to 20% bonus',
  b: 'Go on a monthly plan and get up to 20% extra design hours included free of charge.'
}];
const Bolt = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M13 2L3 14h7l-1 8 11-14h-7l1-6z"
}));
const Layers = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
}));
const Wallet = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2"
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2M16 12h6v3h-6z"
}));
const Plus = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 5v14M5 12h14"
}));
const AFF_ICONS = [Bolt, Layers, Wallet, Plus];
const DTAffordable = () => /*#__PURE__*/React.createElement("section", {
  className: "dt-affordable"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-bloom dt-bloom--gold",
  style: {
    width: 700,
    height: 700,
    top: 200,
    left: -300
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "dt-affordable-inner"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "dt-eyebrow"
}, "The Affordability Equation"), /*#__PURE__*/React.createElement("h2", null, "Why Is Dream Team So Affordable?"), /*#__PURE__*/React.createElement("ul", {
  className: "dt-aff-features"
}, FEATURES.map((f, i) => {
  const Icon = AFF_ICONS[i];
  return /*#__PURE__*/React.createElement("li", {
    className: "dt-aff-feature",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "dt-aff-feat-icon"
  }, /*#__PURE__*/React.createElement(Icon, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dt-aff-feat-title"
  }, f.t), /*#__PURE__*/React.createElement("div", {
    className: "dt-aff-feat-body"
  }, f.b)));
}))), /*#__PURE__*/React.createElement("div", {
  className: "dt-affordable-prose"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-affordable-prose-eyebrow"
}, "The full story"), /*#__PURE__*/React.createElement("p", null, "We\u2019ve already done the deep-dive. We\u2019ve done the creative clarity calls and messaging consults."), /*#__PURE__*/React.createElement("p", null, "We\u2019ve developed your Signature Style, your typography and color palette. We\u2019ve finely crafted the architecture of your authority \u2014 every layout, every cadence, every detail."), /*#__PURE__*/React.createElement("p", null, "So when you come back for a new campaign, a new funnel, a new launch, we\u2019re not starting over. We\u2019re building on the foundation we\u2019ve already poured."))));
window.DTAffordable = DTAffordable;
})(); } catch (e) { __ds_ns.__errors.push({ path: "DTAffordable.jsx", error: String((e && e.message) || e) }); }

// DTCost.jsx
try { (() => {
// DTCost.jsx — section 4: What's it going to cost me?
const DTCost = () => /*#__PURE__*/React.createElement("section", {
  className: "dt-cost",
  id: "how-it-works"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-cost-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-cost-eyebrow"
}, "The Investment"), /*#__PURE__*/React.createElement("h2", null, "What\u2019s It Going to Cost Me?"), /*#__PURE__*/React.createElement("div", {
  className: "dt-cost-anchor"
}, "Our standard project rates start at"), /*#__PURE__*/React.createElement("div", {
  className: "dt-cost-anchor-num"
}, "$30K+"), /*#__PURE__*/React.createElement("div", {
  className: "dt-cost-anchor-fine"
}, "for a custom brand build, signature site, or full campaign system."), /*#__PURE__*/React.createElement("div", {
  className: "dt-cost-reveal"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-cost-reveal-eyebrow"
}, "For Dream Team clients,"), /*#__PURE__*/React.createElement("div", {
  className: "dt-cost-reveal-num"
}, "Starting as low as $3K+"), /*#__PURE__*/React.createElement("div", {
  className: "dt-cost-reveal-body"
}, "Pay for blocks of design credits called ", /*#__PURE__*/React.createElement("b", null, "Flex Funds"), "(that roll over and never expire) or go on a monthly plan and get up to ", /*#__PURE__*/React.createElement("b", null, "20% extra design hours"), " included free of charge. The same world-class Influex team, at a fraction of our standard project rates."), /*#__PURE__*/React.createElement("a", {
  className: "dt-pill-warm",
  href: "#packages"
}, "See How Pricing Works"))));
window.DTCost = DTCost;
})(); } catch (e) { __ds_ns.__errors.push({ path: "DTCost.jsx", error: String((e && e.message) || e) }); }

// DTEvolving.jsx
try { (() => {
// DTEvolving.jsx — section 8
const DTEvolving = () => /*#__PURE__*/React.createElement("section", {
  className: "dt-evolving"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-evolving-inner"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "dt-evolving-eyebrow"
}, "Constantly"), /*#__PURE__*/React.createElement("h2", null, "Constantly ", /*#__PURE__*/React.createElement("span", {
  className: "grad"
}, "Evolving")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 32
  }
}, "Your brand isn\u2019t a one-time project. It\u2019s a living system that should grow alongside your authority, your offers, and your audience."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 16
  }
}, "With Dream Team, your site, funnels and campaign assets are continuously refined \u2014 new launches, fresh testimonials, expanded offerings \u2014 all rolled out by the same team that knows your brand at a cellular level.")), /*#__PURE__*/React.createElement("div", {
  className: "dt-evolving-stack"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-evolving-card a"
}), /*#__PURE__*/React.createElement("div", {
  className: "dt-evolving-card b"
}), /*#__PURE__*/React.createElement("div", {
  className: "dt-evolving-card c"
}))));
window.DTEvolving = DTEvolving;
})(); } catch (e) { __ds_ns.__errors.push({ path: "DTEvolving.jsx", error: String((e && e.message) || e) }); }

// DTExpect.jsx
try { (() => {
// DTExpect.jsx — section 10
const Star = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2l3 6.5L22 10l-5 4.5L18 22l-6-3-6 3 1-7.5L2 10l7-1.5z"
}));
const Shield = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 12l2 2 4-4",
  stroke: "currentColor"
}));
const Compass = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 8l-2 6-6 2 2-6z",
  fill: "currentColor"
}));
const Spark = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2z"
}));
const Crown = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 8l4 6 5-9 5 9 4-6v12H3z"
}));
const EXPECT = [{
  Icon: Star,
  label: 'World-class creative'
}, {
  Icon: Shield,
  label: 'Brand integrity, end-to-end'
}, {
  Icon: Compass,
  label: 'Strategic direction'
}, {
  Icon: Spark,
  label: 'Speed without sacrifice'
}, {
  Icon: Crown,
  label: 'Premium service'
}];
const DTExpect = () => /*#__PURE__*/React.createElement("section", {
  className: "dt-expect"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-eyebrow dt-eyebrow--center",
  style: {
    marginBottom: 24
  }
}, "The Standard"), /*#__PURE__*/React.createElement("h2", null, "As a Dream Team Client, You Can Expect\u2026"), /*#__PURE__*/React.createElement("div", {
  className: "dt-expect-row"
}, EXPECT.map(({
  Icon,
  label
}) => /*#__PURE__*/React.createElement("div", {
  className: "dt-expect-cell",
  key: label
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-expect-glyph"
}, /*#__PURE__*/React.createElement(Icon, null)), /*#__PURE__*/React.createElement("div", {
  className: "dt-expect-text"
}, label)))));
window.DTExpect = DTExpect;
})(); } catch (e) { __ds_ns.__errors.push({ path: "DTExpect.jsx", error: String((e && e.message) || e) }); }

// DTFaq.jsx
try { (() => {
// DTFaq.jsx — section 14
const FAQS = [{
  q: 'How quickly can my Dream Team start working?',
  a: 'Most Dream Team engagements kick off within 5 business days of signing. Existing Influex clients move faster — your brand DNA is already in our system.'
}, {
  q: 'What if I need more hours than my plan includes?',
  a: 'You can top up with Flex Fund credits at any time, at your plan\u2019s discounted hourly rate. Credits roll over month to month and never expire.'
}, {
  q: 'Who do I work with day to day?',
  a: 'You\u2019re assigned a dedicated brand lead who quarterbacks every project. Behind them sits the same Influex team of designers, developers and copywriters that built your flagship work.'
}, {
  q: 'Can I switch plans?',
  a: 'Yes. Move up, down, or pause with 30 days\u2019 notice. Most clients start at Standard and adjust based on their actual cadence after the first quarter.'
}, {
  q: 'Is there a minimum commitment?',
  a: 'Pay As You Go is fully flexible. Proactive plans run on a 3-month minimum, then month-to-month thereafter.'
}, {
  q: 'Do you work with founders who aren\u2019t already Influex clients?',
  a: 'Selectively. Dream Team is optimised for founders we\u2019ve already built brand foundations for. New founders apply through our standard intake first.'
}];
const DTFaq = () => {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "dt-faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dt-faq-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dt-eyebrow dt-eyebrow--center"
  }, "Frequently Asked"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16
    }
  }, "Frequently Asked Questions"), FAQS.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: `dt-faq-item ${open === i ? 'open' : ''}`,
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "dt-faq-q",
    onClick: () => setOpen(open === i ? -1 : i),
    role: "button",
    tabIndex: 0,
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setOpen(open === i ? -1 : i);
      }
    },
    "aria-expanded": open === i
  }, /*#__PURE__*/React.createElement("span", {
    className: "tri"
  }), /*#__PURE__*/React.createElement("span", null, f.q), /*#__PURE__*/React.createElement("span", {
    className: "chevron"
  }, "+")), /*#__PURE__*/React.createElement("div", {
    className: "dt-faq-a"
  }, /*#__PURE__*/React.createElement("div", null, f.a))))));
};
window.DTFaq = DTFaq;
})(); } catch (e) { __ds_ns.__errors.push({ path: "DTFaq.jsx", error: String((e && e.message) || e) }); }

// DTHero.jsx
try { (() => {
// DTHero.jsx — section 1: 3-column scrolling portfolio collage
const COL_A = ['assets/portfolio-8.png',
// World's Best Entrepreneurs
'assets/portfolio-2.png',
// We Stand Up
'assets/portfolio-5.png',
// Connected / Joe Polish
'assets/portfolio-7.png' // Stand Up
];
const COL_B = ['assets/portfolio-1.png',
// We Stand With You
'assets/portfolio-3.png',
// ERC
'assets/portfolio-6.png',
// School of Greatness
'assets/portfolio-8.png'];
const COL_C = ['assets/portfolio-6.png',
// School of Greatness
'assets/portfolio-4.png',
// Fall in Love
'assets/portfolio-5.png',
// Connected
'assets/portfolio-1.png'];
const ScrollCol = ({
  items,
  dir
}) => /*#__PURE__*/React.createElement("div", {
  className: `dt-scroll-col dt-scroll-col--${dir}`
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-scroll-track"
}, [...items, ...items, ...items].map((src, i) => /*#__PURE__*/React.createElement("div", {
  className: "dt-scroll-tile",
  key: i,
  style: {
    backgroundImage: `url(${src})`
  },
  "aria-hidden": "true"
}))));
const DTHero = () => /*#__PURE__*/React.createElement("section", {
  className: "dt-hero"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-hero-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-hero-copy"
}, /*#__PURE__*/React.createElement("h1", null, "As a ", /*#__PURE__*/React.createElement("span", {
  className: "grad"
}, "DREAM", /*#__PURE__*/React.createElement("br", null), "TEAM"), " Client,"), /*#__PURE__*/React.createElement("p", {
  className: "lede"
}, "You get Influex\u2019s World-Class team of designers, developers, branding experts, and copywriters as your personal Dream Team."), /*#__PURE__*/React.createElement("p", {
  className: "lede lede--small"
}, "For ", /*#__PURE__*/React.createElement("em", null, "all"), " your ongoing creative projects and campaigns, in simple monthly and pay-as-you-go packages, at a fraction of our standard project rates.")), /*#__PURE__*/React.createElement("div", {
  className: "dt-hero-collage",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement(ScrollCol, {
  items: COL_A,
  dir: "up"
}), /*#__PURE__*/React.createElement(ScrollCol, {
  items: COL_B,
  dir: "down"
}), /*#__PURE__*/React.createElement(ScrollCol, {
  items: COL_C,
  dir: "up"
}), /*#__PURE__*/React.createElement("div", {
  className: "dt-hero-collage-fade dt-hero-collage-fade--top"
}), /*#__PURE__*/React.createElement("div", {
  className: "dt-hero-collage-fade dt-hero-collage-fade--bottom"
}))));
window.DTHero = DTHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "DTHero.jsx", error: String((e && e.message) || e) }); }

// DTIconsStrip.jsx
try { (() => {
// DTIconsStrip.jsx — section 2: featured client portraits, marquee right
const ICONS_STRIP = [{
  img: 'assets/icon-daymond.png',
  cap: '\u201CDaymond John knows a thing or two about brands\u201D'
}, {
  img: 'assets/icon-matthew.png',
  cap: '\u201CThey genuinely took the time to understand exactly what my vision was for my brand\u201D'
}, {
  img: 'assets/icon-lisa.png',
  cap: '\u201CInsert testimonial here\u201D'
}, {
  img: 'assets/icon-joe.png',
  cap: '\u201CThe best website designer available to Genius Network Members.\u201D'
}, {
  img: 'assets/icon-lewis.png',
  cap: '\u201CA simple, beautiful website can make all the difference for your business.\u201D'
}];
const DTIconsStrip = () => /*#__PURE__*/React.createElement("section", {
  className: "dt-strip"
}, /*#__PURE__*/React.createElement("h2", {
  className: "dt-strip-title"
}, "The Chosen Dream Team", /*#__PURE__*/React.createElement("br", null), "for Industry Icons like\u2026"), /*#__PURE__*/React.createElement("div", {
  className: "dt-strip-marquee"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-strip-track"
}, [...ICONS_STRIP, ...ICONS_STRIP].map((c, i) => /*#__PURE__*/React.createElement("figure", {
  className: "dt-icon-card",
  key: i
}, /*#__PURE__*/React.createElement("img", {
  src: c.img,
  alt: ""
}), /*#__PURE__*/React.createElement("figcaption", null, c.cap))))));
window.DTIconsStrip = DTIconsStrip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "DTIconsStrip.jsx", error: String((e && e.message) || e) }); }

// DTNav.jsx
try { (() => {
// DTNav.jsx — Dream Team page nav (matches design system)
const DTNav = () => /*#__PURE__*/React.createElement("nav", {
  className: "ap-nav"
}, /*#__PURE__*/React.createElement("a", {
  className: "ap-brand",
  href: "#"
}, /*#__PURE__*/React.createElement("span", {
  className: "ap-brand-gold"
}, "INFLUE"), /*#__PURE__*/React.createElement("span", {
  className: "ap-brand-x"
}, "X")), /*#__PURE__*/React.createElement("div", {
  className: "ap-nav-links"
}, ['WHO WE ARE', 'PORTFOLIO', 'PROCESS', 'PRESS', 'STORY COURSE'].map(l => /*#__PURE__*/React.createElement("a", {
  key: l,
  href: "#",
  className: "ap-nav-link"
}, l))), /*#__PURE__*/React.createElement("a", {
  className: "ap-pill ap-pill--filled",
  href: "#discovery"
}, "BOOK YOUR DREAM TEAM DISCOVERY"));
window.DTNav = DTNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "DTNav.jsx", error: String((e && e.message) || e) }); }

// DTOtherworld.jsx
try { (() => {
// DTOtherworld.jsx — section 9
const DTOtherworld = () => /*#__PURE__*/React.createElement("section", {
  className: "dt-otherworld"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-otherworld-bg",
  "aria-hidden": "true"
}), /*#__PURE__*/React.createElement("div", {
  className: "dt-otherworld-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-eyebrow",
  style: {
    marginBottom: 24
  }
}, "The Calibre"), /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("span", {
  className: "grad"
}, "Out-of-This-World Skills"), " & Service at Down-to-Earth Pricing."), /*#__PURE__*/React.createElement("p", null, "Every Dream Team member has shipped flagship work for category-defining founders. The expertise doesn\u2019t shrink because the package is smaller \u2014 it\u2019s the same operators, applied to the projects that need them most.")));
window.DTOtherworld = DTOtherworld;
})(); } catch (e) { __ds_ns.__errors.push({ path: "DTOtherworld.jsx", error: String((e && e.message) || e) }); }

// DTPackages.jsx
try { (() => {
// DTPackages.jsx — section 12
const PACKAGES = [{
  name: 'Dream Team\nStarter',
  price: '$3,000',
  cycle: 'per month',
  features: ['20 hours of dedicated\nDream Team capacity', 'Designers, developers,\ncopywriters on call', 'Flex Fund credits roll over', 'Standard 5-day turnaround', 'Quarterly creative review']
}, {
  name: 'Dream Team\nStandard',
  price: '$6,000',
  cycle: 'per month',
  featured: true,
  features: ['45 hours of dedicated\nDream Team capacity', '+10% bonus hours included', 'Priority queue, 3-day turnaround', 'Monthly strategy session', 'Dedicated brand lead', 'Full campaign system support']
}, {
  name: 'Dream Team\nSupreme',
  price: '$12,000',
  cycle: 'per month',
  features: ['100 hours of dedicated\nDream Team capacity', '+20% bonus hours included', 'Top priority, 24h turnaround', 'Bi-weekly strategy sessions', 'Senior brand director assigned', 'Multi-campaign roadmap', 'Quarterly executive review']
}];
const DTPackages = () => /*#__PURE__*/React.createElement("section", {
  className: "dt-packages",
  id: "packages"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-packages-hd"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-eyebrow dt-eyebrow--center"
}, "Your Investment"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16
  }
}, "Dream Team Dedicated Packages"), /*#__PURE__*/React.createElement("div", {
  className: "sub"
}, "Three ways in. Same team, scaled to your cadence.")), /*#__PURE__*/React.createElement("div", {
  className: "dt-packages-grid"
}, PACKAGES.map(p => /*#__PURE__*/React.createElement("div", {
  className: `dt-pkg ${p.featured ? 'featured' : ''}`,
  key: p.name
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-pkg-name"
}, p.name), /*#__PURE__*/React.createElement("div", {
  className: "dt-pkg-price"
}, p.price), /*#__PURE__*/React.createElement("div", {
  className: "dt-pkg-cycle"
}, p.cycle), /*#__PURE__*/React.createElement("div", {
  className: "dt-pkg-rule"
}), /*#__PURE__*/React.createElement("ul", {
  className: "dt-pkg-features"
}, p.features.map((f, i) => /*#__PURE__*/React.createElement("li", {
  key: i
}, f))), /*#__PURE__*/React.createElement("a", {
  className: "dt-pkg-cta",
  href: "#discovery"
}, "Book Discovery")))), /*#__PURE__*/React.createElement("div", {
  className: "dt-packages-foot"
}, "Need more capacity, or a hybrid? ", /*#__PURE__*/React.createElement("a", {
  href: "#discovery"
}, "Talk to us about a custom plan.")));
window.DTPackages = DTPackages;
})(); } catch (e) { __ds_ns.__errors.push({ path: "DTPackages.jsx", error: String((e && e.message) || e) }); }

// DTPerfectFor.jsx
try { (() => {
// DTPerfectFor.jsx — section 6
const BENEFITS = ['You\u2019re a growing company at 6, 7 or 8 figures in revenue who values world-class creative.', 'You want our creative expertise paired with seamless implementation, not another contractor to manage.', 'You can ROI enhancements in conversions and want measurable upside on every campaign.', 'You have an ongoing need for new design work — landing pages, campaigns, decks, social, print.', 'You\u2019re launching frequently and need a team that can keep up with your release calendar.', 'You want the same Influex quality you\u2019ve seen on our flagship projects — without the flagship price tag.'];
const DTPerfectFor = () => {
  const [slide, setSlide] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setSlide(s => (s + 1) % 3), 4500);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "dt-perfect"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dt-perfect-inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dt-perfect-laptop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dt-perfect-laptop-img"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dt-perfect-dots"
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: `dt-perfect-dot ${i === slide ? 'is-active' : ''}`
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dt-eyebrow"
  }, "For The Right Founder"), /*#__PURE__*/React.createElement("h2", null, "Why Dream Team is ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--dt-warm)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, "perfect for you")), /*#__PURE__*/React.createElement("p", {
    className: "dt-perfect-intro"
  }, "If 3 or more of these sound like you, Dream Team is built for the way you operate:"), /*#__PURE__*/React.createElement("ul", {
    className: "dt-perfect-list"
  }, BENEFITS.map((b, i) => /*#__PURE__*/React.createElement("li", {
    className: "dt-perfect-item",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "dt-perfect-num"
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", {
    className: "dt-perfect-text"
  }, b)))))));
};
window.DTPerfectFor = DTPerfectFor;
})(); } catch (e) { __ds_ns.__errors.push({ path: "DTPerfectFor.jsx", error: String((e && e.message) || e) }); }

// DTPricingHow.jsx
try { (() => {
// DTPricingHow.jsx — section 11
const PAYG = ['Buy Flex Fund credits in blocks', 'Credits roll over &mdash; never expire', 'Use them on whatever you need, whenever', 'No monthly commitment, full flexibility', 'Discounted hourly rate vs. project pricing'];
const PROACTIVE = ['Reserved monthly capacity from your dedicated team', 'Up to 20% bonus design hours included free', 'Priority queue &mdash; faster turnarounds', 'Quarterly creative strategy review', 'Lowest effective rate per design hour'];
const DTPricingHow = () => /*#__PURE__*/React.createElement("section", {
  className: "dt-pricing-how",
  id: "pricing-how"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-eyebrow dt-eyebrow--center"
}, "The Two Modes"), /*#__PURE__*/React.createElement("h2", null, "How Does Dream Team Pricing Work?"), /*#__PURE__*/React.createElement("div", {
  className: "dt-pricing-how-sub"
}, "Pick the way you like to work."), /*#__PURE__*/React.createElement("div", {
  className: "dt-pricing-cols"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-pricing-col"
}, /*#__PURE__*/React.createElement("h3", null, "Pay As You Go"), /*#__PURE__*/React.createElement("p", {
  className: "intro"
}, "For founders who want creative on-tap with zero monthly commitment."), /*#__PURE__*/React.createElement("ul", null, PAYG.map((t, i) => /*#__PURE__*/React.createElement("li", {
  key: i,
  dangerouslySetInnerHTML: {
    __html: t
  }
})))), /*#__PURE__*/React.createElement("div", {
  className: "dt-pricing-col proactive"
}, /*#__PURE__*/React.createElement("h3", {
  className: "warm"
}, "Proactive Plan"), /*#__PURE__*/React.createElement("p", {
  className: "intro"
}, "For founders who want a team in motion every month, building on momentum."), /*#__PURE__*/React.createElement("ul", null, PROACTIVE.map((t, i) => /*#__PURE__*/React.createElement("li", {
  key: i,
  dangerouslySetInnerHTML: {
    __html: t
  }
}))))));
window.DTPricingHow = DTPricingHow;
})(); } catch (e) { __ds_ns.__errors.push({ path: "DTPricingHow.jsx", error: String((e && e.message) || e) }); }

// DTSocial.jsx
try { (() => {
// DTSocial.jsx — section 15: social outro + culture codes
const SOCIAL = ['assets/dt-tile1.png', 'assets/dt-tile2.png', 'assets/dt-tile3.png', 'assets/dt-tile5.png', 'assets/dt-portrait.png'];
const Insta = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8"
}, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17.5",
  cy: "6.5",
  r: "0.8",
  fill: "currentColor"
}));
const FB = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M14 9h3V6h-3c-2 0-3 1-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9z"
}));
const Yt = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M22 12s0-3.5-.5-5c-.3-1-1-1.7-2-2C17.5 4.5 12 4.5 12 4.5s-5.5 0-7.5.5c-1 .3-1.7 1-2 2C2 8.5 2 12 2 12s0 3.5.5 5c.3 1 1 1.7 2 2 2 .5 7.5.5 7.5.5s5.5 0 7.5-.5c1-.3 1.7-1 2-2 .5-1.5.5-5 .5-5zM10 9l5 3-5 3z"
}));
const Li = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 9h3v11H5zM6.5 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM10 9h3v1.5c.5-1 2-1.7 3.5-1.7 3 0 3.5 2 3.5 4.5V20h-3v-5.5c0-1.5-.5-2.5-2-2.5s-2 1.2-2 2.5V20h-3z"
}));
const DTSocial = () => /*#__PURE__*/React.createElement("section", {
  className: "dt-social"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-social-handle"
}, "@influex.co \xB7 Recent Work"), /*#__PURE__*/React.createElement("div", {
  className: "dt-social-grid"
}, SOCIAL.map((src, i) => /*#__PURE__*/React.createElement("div", {
  className: "dt-social-tile",
  key: i,
  style: {
    backgroundImage: `url(${src})`
  }
}))), /*#__PURE__*/React.createElement("div", {
  className: "dt-social-icons"
}, /*#__PURE__*/React.createElement("a", {
  href: "#",
  "aria-label": "Instagram"
}, /*#__PURE__*/React.createElement(Insta, null)), /*#__PURE__*/React.createElement("a", {
  href: "#",
  "aria-label": "Facebook"
}, /*#__PURE__*/React.createElement(FB, null)), /*#__PURE__*/React.createElement("a", {
  href: "#",
  "aria-label": "YouTube"
}, /*#__PURE__*/React.createElement(Yt, null)), /*#__PURE__*/React.createElement("a", {
  href: "#",
  "aria-label": "LinkedIn"
}, /*#__PURE__*/React.createElement(Li, null))), /*#__PURE__*/React.createElement("div", {
  className: "dt-codes"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-eyebrow dt-eyebrow--center",
  style: {
    marginBottom: 32
  }
}, "Core Culture Codes"), /*#__PURE__*/React.createElement("div", {
  className: "dt-codes-vertical"
}, /*#__PURE__*/React.createElement("div", {
  className: "l1"
}, "Influence"), /*#__PURE__*/React.createElement("div", {
  className: "l2"
}, "Impact"), /*#__PURE__*/React.createElement("div", {
  className: "l3"
}, "Income"))));
window.DTSocial = DTSocial;
})(); } catch (e) { __ds_ns.__errors.push({ path: "DTSocial.jsx", error: String((e && e.message) || e) }); }

// DTTweaks.jsx
try { (() => {
// DTTweaks.jsx — Tweaks panel for the Dream Team page
const DTTweaks = () => {
  const defaults = window.__DT_TWEAKS__ || {
    accent: 'warm',
    density: 'relaxed',
    emphasis: 'gradient'
  };
  const [tweaks, setTweaks] = React.useState(defaults);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onMsg = e => {
      if (!e?.data?.type) return;
      if (e.data.type === '__activate_edit_mode') setOpen(true);
      if (e.data.type === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const set = (k, v) => {
    const next = {
      ...tweaks,
      [k]: v
    };
    setTweaks(next);
    document.body.dataset[k] = v;
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits: {
        [k]: v
      }
    }, '*');
  };
  React.useEffect(() => {
    Object.entries(tweaks).forEach(([k, v]) => {
      document.body.dataset[k] = v;
    });
  }, []); // eslint-disable-line

  if (!open) return null;
  const close = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const Seg = ({
    k,
    opts
  }) => /*#__PURE__*/React.createElement("div", {
    className: "dt-tw-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, k), /*#__PURE__*/React.createElement("div", {
    className: "dt-tw-seg"
  }, opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    className: tweaks[k] === o ? 'is-active' : '',
    onClick: () => set(k, o)
  }, o))));
  return /*#__PURE__*/React.createElement("div", {
    className: "dt-tweaks"
  }, /*#__PURE__*/React.createElement("h4", null, "Tweaks ", /*#__PURE__*/React.createElement("span", {
    className: "x",
    onClick: close
  }, "\xD7")), /*#__PURE__*/React.createElement(Seg, {
    k: "accent",
    opts: ['warm', 'mauve', 'ivory']
  }), /*#__PURE__*/React.createElement(Seg, {
    k: "density",
    opts: ['relaxed', 'compact']
  }), /*#__PURE__*/React.createElement(Seg, {
    k: "emphasis",
    opts: ['gradient', 'solid']
  }));
};
window.DTTweaks = DTTweaks;
})(); } catch (e) { __ds_ns.__errors.push({ path: "DTTweaks.jsx", error: String((e && e.message) || e) }); }

// DTWeServe.jsx
try { (() => {
// DTWeServe.jsx — section 7
const SERVE = ['Roland Frasier', 'Daymond John', 'Ryan Deiss', 'Jim Kwik', 'Joe Polish', 'Lewis Howes', 'Matthew Hussey', 'Dr. Pompa', 'Tony Robbins', 'Russell Brunson', 'Marie Forleo', 'Trent Shelton', 'Brendon Burchard', 'Mel Robbins', 'Vishen Lakhiani', 'Ed Mylett'];
const initials = name => name.split(/\s+/).filter(Boolean).slice(0, 2).map(n => n[0]).join('');
const DTWeServe = () => /*#__PURE__*/React.createElement("section", {
  className: "dt-serve"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-serve-eyebrow"
}, "This Isn\u2019t Just ", /*#__PURE__*/React.createElement("b", null, "Any"), " Dream Team. This is the chosen creative partner for the founders, authors and operators redefining their categories."), /*#__PURE__*/React.createElement("div", {
  className: "dt-serve-wordmark"
}, "WE ", /*#__PURE__*/React.createElement("span", {
  className: "lc"
}, "serve")), /*#__PURE__*/React.createElement("div", {
  className: "dt-serve-grid"
}, SERVE.map(name => /*#__PURE__*/React.createElement("div", {
  className: "dt-serve-cell",
  key: name
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-serve-portrait"
}, /*#__PURE__*/React.createElement("div", {
  className: "mono"
}, initials(name))), /*#__PURE__*/React.createElement("div", {
  className: "dt-serve-name"
}, name)))));
window.DTWeServe = DTWeServe;
})(); } catch (e) { __ds_ns.__errors.push({ path: "DTWeServe.jsx", error: String((e && e.message) || e) }); }

// DTWhich.jsx
try { (() => {
// DTWhich.jsx — section 13
const ON_DEMAND = ['You have ad-hoc creative needs &mdash; not a constant pipeline', 'You prefer no monthly commitment', 'You want to dip in for one-off campaigns or refreshes', 'You value flexibility over speed'];
const WHICH_PROACTIVE = ['You have an active campaign calendar every month', 'You want a team that&rsquo;s already in motion', 'You value priority queue &amp; faster turnarounds', 'You want strategy baked in, not billed extra'];
const DTWhich = () => /*#__PURE__*/React.createElement("section", {
  className: "dt-which"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-which-hd"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-eyebrow dt-eyebrow--center"
}, "Choose Your Mode"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16
  }
}, "Which Dream Team Plan is Right for Me?")), /*#__PURE__*/React.createElement("div", {
  className: "dt-which-grid"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-which-panel ondemand"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-which-eyebrow"
}, "Mode 01"), /*#__PURE__*/React.createElement("h3", null, "On-Demand"), /*#__PURE__*/React.createElement("div", {
  className: "qualifier"
}, "Best if you can say \u201Cyes\u201D to most of these:"), /*#__PURE__*/React.createElement("ul", {
  className: "dt-which-list"
}, ON_DEMAND.map((t, i) => /*#__PURE__*/React.createElement("li", {
  key: i,
  dangerouslySetInnerHTML: {
    __html: t
  }
}))), /*#__PURE__*/React.createElement("a", {
  className: "btn",
  href: "#packages"
}, "Start with Pay As You Go")), /*#__PURE__*/React.createElement("div", {
  className: "dt-which-panel proactive"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-which-eyebrow"
}, "Mode 02"), /*#__PURE__*/React.createElement("h3", null, "Proactive Partner"), /*#__PURE__*/React.createElement("div", {
  className: "qualifier"
}, "Best if you can say \u201Cyes\u201D to most of these:"), /*#__PURE__*/React.createElement("ul", {
  className: "dt-which-list"
}, WHICH_PROACTIVE.map((t, i) => /*#__PURE__*/React.createElement("li", {
  key: i,
  dangerouslySetInnerHTML: {
    __html: t
  }
}))), /*#__PURE__*/React.createElement("a", {
  className: "dt-pill-warm",
  href: "#packages"
}, "Start a Proactive Plan"))));
window.DTWhich = DTWhich;
})(); } catch (e) { __ds_ns.__errors.push({ path: "DTWhich.jsx", error: String((e && e.message) || e) }); }

// DTWhyCreate.jsx
try { (() => {
// DTWhyCreate.jsx — section 3: Why We Created Dream Team
const CATEGORIES = ['Branding', 'Web Design\n& Development', 'Marketing Campaigns', 'Funnels', 'Social Media\n& Print Design', 'Video Production', 'Copywriting'];
const DTWhyCreate = () => {
  const [active, setActive] = React.useState(2);
  return /*#__PURE__*/React.createElement("section", {
    className: "dt-why-create"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dt-bloom dt-bloom--warm",
    style: {
      width: 600,
      height: 600,
      top: -200,
      right: -100
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "dt-why-create-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dt-why-create-rail",
    role: "tablist"
  }, CATEGORIES.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `item ${i === active ? 'is-active' : ''}`,
    onMouseEnter: () => setActive(i),
    role: "tab",
    "aria-selected": i === active
  }, c))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dt-eyebrow"
  }, "Why We Created Dream Team"), /*#__PURE__*/React.createElement("h2", null, "For ", /*#__PURE__*/React.createElement("span", {
    className: "grad"
  }, CATEGORIES[active].replace('\n', ' ')), " \u2014 and every campaign in between."), /*#__PURE__*/React.createElement("p", null, "Over the past 12 years, we\u2019ve developed, launched and evolved the brands for over 200 of the world\u2019s top thought-leaders, industry icons, moguls and magnates, influencers, entrepreneurs and innovators."), /*#__PURE__*/React.createElement("p", null, "Save precious time and money trying to educate a new team on the details and intricacies of your brand. Avoid gambling on hit-or-miss contractors who don\u2019t fully know you and your business."), /*#__PURE__*/React.createElement("div", {
    className: "dt-why-create-collage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "a"
  }), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b"
  }), /*#__PURE__*/React.createElement("div", {
    className: "c"
  }))))));
};
window.DTWhyCreate = DTWhyCreate;
})(); } catch (e) { __ds_ns.__errors.push({ path: "DTWhyCreate.jsx", error: String((e && e.message) || e) }); }

// FAQ.jsx
try { (() => {
// FAQ — accordion
const FAQ = () => {
  const items = [{
    q: "Why pay for a \"sales call\"?",
    a: "This isn't a sales call. You're receiving a risk-free Creative Clarity Consult where we get a clear picture of where you're at with your current online positioning, brand image, websites, and messaging — and build the bridge to where you want to go. We may even do a live audit of your current site. After the call you'll have Clarity on exactly what needs to happen, and we'll both know if we're aligned to work together. Influex is highly selective — we only onboard 2–3 new clients per month."
  }, {
    q: "What can I actually get from a Creative Clarity Consult?",
    a: "We'll assess where you're at with your online image and build the vision of a site that truly expresses your essence and amplifies your influence. Topics we can cover: a full audit of your current site(s); clarity on your brand triangle (Personal, Company, Product); naming and messaging consulting; online marketing strategy around your site; style, essence and core-message articulation; tech-stack decisions. We'll start with whatever is most immediately valuable to you."
  }, {
    q: "Who is a fit for Influex agency services?",
    a: "You're an ideal fit if your company is 7, multiple-7, or 8 figures on a growth trajectory; you already have a proven product and a great reputation; you value intentional design and branding; and your business can achieve significant ROI from an Iconic Brand & World-Class Website. Our full Iconic Identity Branding starts at 2 payments of $15k."
  }, {
    q: "If I'm ready to hire you right after our call, what's the next step?",
    a: "If we're an aligned fit after our Creative Clarity Consult, we'll discuss which package is right for you — or put together a custom proposal. You'll make a deposit to secure your start date; we typically have a waiting list."
  }, {
    q: "What happens to the $200 deposit if I don't move forward?",
    a: "If you don't find the consult valuable (this is rare), we refund your deposit the same day. If you do move forward with an engagement, the deposit is applied to your package. If you implement on your own, the deposit is yours as payment for the consult — and you'll save 10x+ that fee on implementation thanks to the clarity we deliver."
  }];
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "ap-faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-faq-bloom"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ap-faq-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-faq-hd"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-faq-kicker"
  }, "FREQUENTLY ASKED"), /*#__PURE__*/React.createElement("h2", {
    className: "ap-faq-h2"
  }, "Questions you're probably ", /*#__PURE__*/React.createElement("b", null, "asking right now."))), /*#__PURE__*/React.createElement("div", {
    className: "ap-faq-list"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `ap-faq-item ${open === i ? 'open' : ''}`,
    onClick: () => setOpen(open === i ? -1 : i)
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-faq-q"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-faq-q-num"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    className: "ap-faq-q-text"
  }, it.q), /*#__PURE__*/React.createElement("div", {
    className: "ap-faq-plus"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ap-faq-a"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-faq-a-inner"
  }, it.a)))))));
};
window.FAQ = FAQ;
})(); } catch (e) { __ds_ns.__errors.push({ path: "FAQ.jsx", error: String((e && e.message) || e) }); }

// FitAssessment.jsx
try { (() => {
// FitAssessment — Who is / isn't a fit
const FitAssessment = () => {
  const yes = ['Your company does 7, multiple-7, or 8 figures on a strong growth trajectory.', 'You have a clear product or service that sells well and produces real results.', 'You have a meaningful mission we can get behind as your Dream Team.', 'You understand online image as an authentic expression of your essence — and want to stand out.', 'Your business can achieve significant ROI from an Iconic Brand & World-Class Website.', 'You\'re inspired by our portfolio and value intentional, branded design.'];
  const no = ['You\'re just starting out without a proven product or track record.', 'You\'re generating under $500k in gross annual revenue (or aren\'t funded).', 'You expect a site to instantly fix a business that isn\'t profitable yet.', 'You only want a single landing page — we focus on comprehensive projects.', 'Branding is an afterthought and you don\'t value intentional design.', 'You want to present yourself online as something you\'re not — we\'re committed to authentic authority.'];
  return /*#__PURE__*/React.createElement("section", {
    className: "ap-fit"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-fit-hd"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ap-fit-kicker"
  }, "ALIGNMENT ASSESSMENT"), /*#__PURE__*/React.createElement("h2", {
    className: "ap-fit-h2"
  }, "Who is \u2014 ", /*#__PURE__*/React.createElement("br", null), "and ", /*#__PURE__*/React.createElement("b", null, "isn't"), " \u2014 a fit for Influex.")), /*#__PURE__*/React.createElement("p", {
    className: "ap-fit-sub"
  }, "We're a boutique design studio. We onboard 2\u20133 new clients per month and are candid about who we're right for. Read both lists.")), /*#__PURE__*/React.createElement("div", {
    className: "ap-fit-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-fit-col ap-fit-col--yes"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-fit-col-label"
  }, "YOU'RE AN IDEAL FIT IF"), /*#__PURE__*/React.createElement("h3", null, "You see your brand as an extension of your essence."), /*#__PURE__*/React.createElement("ul", {
    className: "ap-fit-list"
  }, yes.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "ap-fit-dot ap-fit-dot--yes"
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, t))))), /*#__PURE__*/React.createElement("div", {
    className: "ap-fit-col ap-fit-col--no"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-fit-col-label"
  }, "YOU'RE NOT A FIT IF"), /*#__PURE__*/React.createElement("h3", null, "We're not the right partner \u2014 and that's okay."), /*#__PURE__*/React.createElement("ul", {
    className: "ap-fit-list"
  }, no.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "ap-fit-dot ap-fit-dot--no"
  }, "\xD7"), /*#__PURE__*/React.createElement("span", null, t)))))), /*#__PURE__*/React.createElement("p", {
    className: "ap-fit-footnote"
  }, "If our packages don't fit your budget right now, I'm still happy to show up fully to our Creative Clarity Consult to architect a site vision and plan that saves you thousands on implementation."));
};
window.FitAssessment = FitAssessment;
})(); } catch (e) { __ds_ns.__errors.push({ path: "FitAssessment.jsx", error: String((e && e.message) || e) }); }

// Hero.jsx
try { (() => {
// Hero.jsx — Apply page
const Hero = () => /*#__PURE__*/React.createElement("section", {
  className: "ap-hero"
}, /*#__PURE__*/React.createElement("div", {
  className: "ap-hero-bloom-a"
}), /*#__PURE__*/React.createElement("div", {
  className: "ap-hero-bloom-b"
}), /*#__PURE__*/React.createElement("div", {
  className: "ap-container"
}, /*#__PURE__*/React.createElement("div", {
  className: "ap-hero-grid"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "ap-hero-eyebrow-row"
}, /*#__PURE__*/React.createElement("div", {
  className: "rule-bit"
}), /*#__PURE__*/React.createElement("div", {
  className: "eyebrow eyebrow--accent"
}, "APPLY \xA0/\xA0 CEO CREATIVE CONSULT")), /*#__PURE__*/React.createElement("h1", {
  className: "ap-hero-h1"
}, "Is ", /*#__PURE__*/React.createElement("b", null, "INFLUEX"), " your", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", null, "Dream Team"), " for", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "Infinite ROI?")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 20,
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 12
  }
}, /*#__PURE__*/React.createElement("a", {
  className: "ap-pill ap-pill--filled",
  href: "#apply-form"
}, "YES, I'D LIKE TO APPLY"), /*#__PURE__*/React.createElement("a", {
  className: "ap-pill",
  href: "#pricing"
}, "HOW IT WORKS")), /*#__PURE__*/React.createElement("div", {
  className: "ap-hero-meta"
}, /*#__PURE__*/React.createElement("div", {
  className: "ap-hero-meta-item"
}, /*#__PURE__*/React.createElement("div", {
  className: "k"
}, "DURATION"), /*#__PURE__*/React.createElement("div", {
  className: "v"
}, "1 Hour ", /*#__PURE__*/React.createElement("small", null, "Creative Clarity Consult"))), /*#__PURE__*/React.createElement("div", {
  className: "ap-hero-meta-item"
}, /*#__PURE__*/React.createElement("div", {
  className: "k"
}, "INVESTMENT"), /*#__PURE__*/React.createElement("div", {
  className: "v"
}, "$200 ", /*#__PURE__*/React.createElement("small", null, "75% off \xB7 refundable"))), /*#__PURE__*/React.createElement("div", {
  className: "ap-hero-meta-item"
}, /*#__PURE__*/React.createElement("div", {
  className: "k"
}, "OUTCOME"), /*#__PURE__*/React.createElement("div", {
  className: "v"
}, "10X ROI ", /*#__PURE__*/React.createElement("small", null, "guaranteed or refund"))))), /*#__PURE__*/React.createElement("aside", {
  className: "ap-hero-card"
}, /*#__PURE__*/React.createElement("div", {
  className: "ap-hero-card-tag"
}, "CLIENT TESTIMONY"), /*#__PURE__*/React.createElement("p", {
  className: "ap-hero-card-quote"
}, "\"I'm so happy with the result. If you can't ", /*#__PURE__*/React.createElement("b", null, "ROI 10X"), " what tiny bit he charges, you should just quit and do something else \u2014 his work is great, and ", /*#__PURE__*/React.createElement("b", null, "the process is perfect."), "\""), /*#__PURE__*/React.createElement("div", {
  className: "ap-hero-card-person"
}, /*#__PURE__*/React.createElement("div", {
  className: "ap-avatar"
}, "RF"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "ap-hero-card-name"
}, "ROLAND FRASIER"), /*#__PURE__*/React.createElement("div", {
  className: "ap-hero-card-role"
}, "Serial Entrepreneur \xB7 Co-Founder, Scalable.co")))))));
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "Hero.jsx", error: String((e && e.message) || e) }); }

// HowItWorks.jsx
try { (() => {
// HowItWorks.jsx — five horizontal steps
const HowItWorks = () => {
  const steps = [{
    n: '01',
    k: 'Referral',
    t: 'We refer qualified clients',
    d: 'When a client\u2019s need falls outside our core, we warm-introduce them to a partner we trust.'
  }, {
    n: '02',
    k: 'Organization',
    t: 'Organized internally',
    d: 'Partners are catalogued by service, strength, and stage of client so we match the right room to the right need.'
  }, {
    n: '03',
    k: 'Commission',
    t: 'Commission-based relationship',
    d: 'We prefer a transparent commission on client work we originate. Structured simply, documented cleanly.'
  }, {
    n: '04',
    k: 'Reciprocity',
    t: 'Mutual referrals',
    d: 'The network is two-way. Great partners refer brand and web work back to Influex when the fit is right.'
  }, {
    n: '05',
    k: 'Collaboration',
    t: 'We collaborate when aligned',
    d: 'On large engagements we co-deliver \u2014 brand + web from us, execution from you, under one clear plan.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "pn-how"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-how-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-meta-row pn-meta-row--light",
    style: {
      marginBottom: 80
    }
  }, /*#__PURE__*/React.createElement("hr", {
    className: "rule"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Chapter 03 \xA0\xB7\xA0 The Model"), /*#__PURE__*/React.createElement("span", {
    className: "lbl lbl--r"
  }, "How the network operates")), /*#__PURE__*/React.createElement("div", {
    className: "pn-how-hd"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-how-kicker"
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    className: "pn-how-h2"
  }, "A quiet, ", /*#__PURE__*/React.createElement("b", null, "commission-based"), " referral relationship \u2014", /*#__PURE__*/React.createElement("br", null), "built for ", /*#__PURE__*/React.createElement("b", null, "compounding trust.")), /*#__PURE__*/React.createElement("p", {
    className: "pn-how-sub"
  }, "No marketplace. No directory. No RFPs. A phone call, an introduction, and a shared standard of care for every client we place in your hands.")), /*#__PURE__*/React.createElement("div", {
    className: "pn-how-row"
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    className: "pn-how-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-how-dot"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "pn-how-label"
  }, s.k), /*#__PURE__*/React.createElement("h3", {
    className: "pn-how-title"
  }, s.t), /*#__PURE__*/React.createElement("p", {
    className: "pn-how-body"
  }, s.d))))));
};
window.HowItWorks = HowItWorks;
})(); } catch (e) { __ds_ns.__errors.push({ path: "HowItWorks.jsx", error: String((e && e.message) || e) }); }

// Nav.jsx
try { (() => {
// Nav.jsx — Apply page nav
const Nav = () => /*#__PURE__*/React.createElement("nav", {
  className: "ap-nav"
}, /*#__PURE__*/React.createElement("a", {
  className: "ap-brand",
  href: "#"
}, /*#__PURE__*/React.createElement("span", {
  className: "ap-brand-gold"
}, "INFLUE"), /*#__PURE__*/React.createElement("span", {
  className: "ap-brand-x"
}, "X")), /*#__PURE__*/React.createElement("div", {
  className: "ap-nav-links"
}, ['WHO WE ARE', 'PORTFOLIO', 'PROCESS', 'PRESS', 'STORY COURSE'].map(l => /*#__PURE__*/React.createElement("a", {
  key: l,
  href: "#",
  className: "ap-nav-link"
}, l))), /*#__PURE__*/React.createElement("a", {
  className: "ap-pill ap-pill--filled",
  href: "#apply-form"
}, "BOOK YOUR CALL"));
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "Nav.jsx", error: String((e && e.message) || e) }); }

// Outcomes.jsx
try { (() => {
// Outcomes — 3 possible outcomes of the consult
const Outcomes = () => {
  const rows = [{
    n: '01',
    title: 'You\'ll want to hire us.',
    body: 'You get massive value from the Creative Clarity Consult — and choose to bring our Dream Team in for full creative vision and implementation.'
  }, {
    n: '02',
    title: 'You\'ll implement on your own.',
    body: 'You get massive value — and implement with your in-house team or another agency. You still save 10x+ the consultation fee on implementation because you\'ll have Clarity on Strategy, Style & Structure.'
  }, {
    n: '03',
    title: 'We refund you, no questions.',
    body: 'In the unlikely event you don\'t find value (hasn\'t happened yet), we refund your deposit the same day and simply recognize we weren\'t aligned.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "ap-consult"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-consult-hd"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-consult-kicker"
  }, "THREE POSSIBLE OUTCOMES"), /*#__PURE__*/React.createElement("h2", {
    className: "ap-consult-h2"
  }, "One hour together. ", /*#__PURE__*/React.createElement("b", null, "Three ways it can go."), " All of them valuable."), /*#__PURE__*/React.createElement("p", {
    className: "ap-consult-sub"
  }, "The purpose of this call is to get a clear picture of where you're at with your current online positioning, brand image, and messaging \u2014 where you want to go, and to build the bridge to get there.")), /*#__PURE__*/React.createElement("div", {
    className: "ap-outcome-grid"
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.n,
    className: "ap-outcome"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-outcome-num"
  }, r.n), /*#__PURE__*/React.createElement("h3", {
    className: "ap-outcome-title"
  }, r.title), /*#__PURE__*/React.createElement("p", {
    className: "ap-outcome-body"
  }, r.body), /*#__PURE__*/React.createElement("div", {
    className: "ap-outcome-rule"
  })))));
};
window.Outcomes = Outcomes;
})(); } catch (e) { __ds_ns.__errors.push({ path: "Outcomes.jsx", error: String((e && e.message) || e) }); }

// PartnerGrid.jsx
try { (() => {
// PartnerGrid.jsx — placeholder tiles
const PartnerGrid = () => {
  const tiles = [{
    cat: 'Paid Advertising',
    name: '[ Partner Name ]',
    desc: 'Performance media &mdash; Meta, YouTube, Google. For founders with offers ready to scale.'
  }, {
    cat: 'Video Marketing',
    name: '[ Partner Name ]',
    desc: 'Long-form content engines. YouTube growth, podcast production, short-form distribution.'
  }, {
    cat: 'CRM / GoHighLevel',
    name: '[ Partner Name ]',
    desc: 'Revenue operations, automation, and sales enablement on top of your new brand.'
  }, {
    cat: 'PR & Press',
    name: '[ Partner Name ]',
    desc: 'Earned media strategy for founders who have built something worth covering.'
  }, {
    cat: 'Email Marketing',
    name: '[ Partner Name ]',
    desc: 'List strategy, lifecycle, and broadcast for coaches, authors, and course creators.'
  }, {
    cat: 'SEO',
    name: '[ Partner Name ]',
    desc: 'Editorial-grade organic growth for expert brands and knowledge businesses.'
  }, {
    cat: 'AI & Automation',
    name: '[ Partner Name ]',
    desc: 'Custom agents, workflows, and back-office systems for lean high-leverage teams.'
  }, {
    cat: 'Analytics',
    name: '[ Partner Name ]',
    desc: 'Attribution, dashboards, and decision infrastructure for operators who measure.'
  }];
  const placeholders = [{
    cat: 'Social Media',
    label: 'Open seat'
  }, {
    cat: 'Copywriting',
    label: 'Open seat'
  }, {
    cat: 'Web Development',
    label: 'Open seat'
  }, {
    cat: 'Consulting',
    label: 'Open seat'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "pn-grid-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-grid-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-meta-row pn-meta-row--light",
    style: {
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("hr", {
    className: "rule"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Chapter 04 \xA0\xB7\xA0 The Roster"), /*#__PURE__*/React.createElement("span", {
    className: "lbl lbl--r"
  }, "Partners & open seats")), /*#__PURE__*/React.createElement("div", {
    className: "pn-grid-hd"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pn-grid-kicker"
  }, "Current partners & open seats"), /*#__PURE__*/React.createElement("h2", {
    className: "pn-grid-h2"
  }, "A ", /*#__PURE__*/React.createElement("b", null, "short list"), ", intentionally.")), /*#__PURE__*/React.createElement("p", {
    className: "pn-grid-note"
  }, "We cap one to two partners per discipline. When a seat is taken, we close the category until the relationship proves otherwise.")), /*#__PURE__*/React.createElement("div", {
    className: "pn-grid"
  }, tiles.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "pn-tile"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-tile-cat"
  }, t.cat), /*#__PURE__*/React.createElement("div", {
    className: "pn-tile-name"
  }, t.name), /*#__PURE__*/React.createElement("p", {
    className: "pn-tile-desc",
    dangerouslySetInnerHTML: {
      __html: t.desc
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "pn-tile-meta"
  }, /*#__PURE__*/React.createElement("span", null, "Active partner"), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  })))), placeholders.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: 'p' + i,
    className: "pn-tile pn-tile--placeholder"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-tile-cat"
  }, p.cat), /*#__PURE__*/React.createElement("div", {
    className: "pn-tile-name"
  }, p.label), /*#__PURE__*/React.createElement("p", {
    className: "pn-tile-desc"
  }, "Accepting applications this quarter. Clear the standard \u2014 and the seat is yours."), /*#__PURE__*/React.createElement("div", {
    className: "pn-tile-meta"
  }, /*#__PURE__*/React.createElement("span", null, "Open \u2014 apply below"), /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: '#9B6A1F'
    }
  })))))));
};
window.PartnerGrid = PartnerGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "PartnerGrid.jsx", error: String((e && e.message) || e) }); }

// PartnersCTA.jsx
try { (() => {
// PartnersCTA.jsx
const PartnersCTA = () => /*#__PURE__*/React.createElement("section", {
  className: "pn-cta"
}, /*#__PURE__*/React.createElement("div", {
  className: "pn-cta-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "pn-cta-rule"
}), /*#__PURE__*/React.createElement("div", {
  className: "pn-standard-kicker",
  style: {
    color: 'var(--color-champagne)',
    marginBottom: 40
  }
}, "If aligned \u2014 apply below"), /*#__PURE__*/React.createElement("h2", {
  className: "pn-cta-h2"
}, "Think you ", /*#__PURE__*/React.createElement("b", null, "clear the standard?")), /*#__PURE__*/React.createElement("p", {
  className: "pn-cta-sub"
}, "The application below is short, direct, and read personally by our team. If we see the fit, we'll be in touch within ten business days."), /*#__PURE__*/React.createElement("div", {
  className: "pn-cta-ctas"
}, /*#__PURE__*/React.createElement("a", {
  className: "ap-pill ap-pill--filled",
  href: "#apply"
}, "BEGIN APPLICATION"), /*#__PURE__*/React.createElement("a", {
  className: "ap-pill",
  href: "#standard"
}, "RE-READ THE STANDARD")), /*#__PURE__*/React.createElement("div", {
  className: "pn-cta-fineprint"
}, "By invitation \xA0\xB7\xA0 Est. 2026 \xA0\xB7\xA0 One seat per category")));
window.PartnersCTA = PartnersCTA;
})(); } catch (e) { __ds_ns.__errors.push({ path: "PartnersCTA.jsx", error: String((e && e.message) || e) }); }

// PartnersHero.jsx
try { (() => {
// PartnersHero.jsx — editorial hero, centered
const PartnersHero = () => /*#__PURE__*/React.createElement("section", {
  className: "pn-hero"
}, /*#__PURE__*/React.createElement("div", {
  className: "pn-hero-bloom-a"
}), /*#__PURE__*/React.createElement("div", {
  className: "pn-hero-bloom-b"
}), /*#__PURE__*/React.createElement("div", {
  className: "pn-hero-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "pn-hero-eyebrow"
}, /*#__PURE__*/React.createElement("span", {
  className: "bar"
}), /*#__PURE__*/React.createElement("span", {
  className: "txt"
}, "Influex Preferred Partners \xA0\xB7\xA0 Est. 2026"), /*#__PURE__*/React.createElement("span", {
  className: "bar"
})), /*#__PURE__*/React.createElement("h1", {
  className: "pn-hero-h1"
}, "A curated ", /*#__PURE__*/React.createElement("i", null, "network"), /*#__PURE__*/React.createElement("br", null), "of experts we ", /*#__PURE__*/React.createElement("b", null, "confidently refer.")), /*#__PURE__*/React.createElement("p", {
  className: "pn-hero-sub"
}, "When our clients need a specialist beyond our core of iconic brands and world-class websites, we send them to the partners on this page \u2014 and no one else."), /*#__PURE__*/React.createElement("div", {
  className: "pn-hero-ctas"
}, /*#__PURE__*/React.createElement("a", {
  className: "ap-pill ap-pill--filled",
  href: "#apply"
}, "APPLY TO BECOME A PARTNER"), /*#__PURE__*/React.createElement("a", {
  className: "ap-pill",
  href: "#standard"
}, "READ THE STANDARD")), /*#__PURE__*/React.createElement("div", {
  className: "pn-hero-meta"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "k"
}, "Referrals / year"), /*#__PURE__*/React.createElement("div", {
  className: "v"
}, /*#__PURE__*/React.createElement("b", null, "200+"), /*#__PURE__*/React.createElement("small", null, "qualified clients, warm-introduced"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "k"
}, "Acceptance rate"), /*#__PURE__*/React.createElement("div", {
  className: "v"
}, /*#__PURE__*/React.createElement("b", null, "~7%"), /*#__PURE__*/React.createElement("small", null, "of partner applications"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "k"
}, "Model"), /*#__PURE__*/React.createElement("div", {
  className: "v"
}, "Commission", /*#__PURE__*/React.createElement("small", null, "mutual referrals preferred"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "k"
}, "Status"), /*#__PURE__*/React.createElement("div", {
  className: "v"
}, "Invitation", /*#__PURE__*/React.createElement("small", null, "not a directory or marketplace"))))));
window.PartnersHero = PartnersHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "PartnersHero.jsx", error: String((e && e.message) || e) }); }

// PartnersTweaks.jsx
try { (() => {
// PartnersTweaks.jsx — host-toggleable Tweaks panel for the Partners page
const PartnersTweaks = () => {
  const [shown, setShown] = React.useState(false);
  const T = window.__TWEAKS__ || {};
  const [accent, setAccent] = React.useState(T.accent || 'champagne');
  const [density, setDensity] = React.useState(T.density || 'relaxed');
  const [tone, setTone] = React.useState(T.tone || 'editorial');
  const [hero, setHero] = React.useState(T.hero || 'centered');
  React.useEffect(() => {
    const handler = e => {
      if (e.data && e.data.type === '__activate_edit_mode') setShown(true);
      if (e.data && e.data.type === '__deactivate_edit_mode') setShown(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);
  React.useEffect(() => {
    document.body.setAttribute('data-accent', accent);
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits: {
        accent
      }
    }, '*');
  }, [accent]);
  React.useEffect(() => {
    document.body.setAttribute('data-density', density);
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits: {
        density
      }
    }, '*');
  }, [density]);
  React.useEffect(() => {
    document.body.setAttribute('data-tone', tone);
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits: {
        tone
      }
    }, '*');
  }, [tone]);
  React.useEffect(() => {
    document.body.setAttribute('data-hero', hero);
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits: {
        hero
      }
    }, '*');
  }, [hero]);
  return /*#__PURE__*/React.createElement("div", {
    className: `ap-tweaks ${shown ? 'show' : ''}`,
    style: {
      width: 300
    }
  }, /*#__PURE__*/React.createElement("h4", null, "TWEAKS"), /*#__PURE__*/React.createElement("div", {
    className: "ap-tweaks-row"
  }, /*#__PURE__*/React.createElement("label", null, "Accent color"), /*#__PURE__*/React.createElement("div", {
    className: "opts"
  }, ['champagne', 'mauve', 'rose', 'emerald'].map(a => /*#__PURE__*/React.createElement("button", {
    key: a,
    className: `ap-tweak-chip ${accent === a ? 'active' : ''}`,
    onClick: () => setAccent(a)
  }, a)))), /*#__PURE__*/React.createElement("div", {
    className: "ap-tweaks-row"
  }, /*#__PURE__*/React.createElement("label", null, "Density"), /*#__PURE__*/React.createElement("div", {
    className: "opts"
  }, ['compact', 'relaxed', 'editorial'].map(d => /*#__PURE__*/React.createElement("button", {
    key: d,
    className: `ap-tweak-chip ${density === d ? 'active' : ''}`,
    onClick: () => setDensity(d)
  }, d)))), /*#__PURE__*/React.createElement("div", {
    className: "ap-tweaks-row"
  }, /*#__PURE__*/React.createElement("label", null, "Selectivity tone"), /*#__PURE__*/React.createElement("div", {
    className: "opts"
  }, ['warm', 'editorial', 'velvet'].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    className: `ap-tweak-chip ${tone === t ? 'active' : ''}`,
    onClick: () => setTone(t)
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "ap-tweaks-row"
  }, /*#__PURE__*/React.createElement("label", null, "Hero variant"), /*#__PURE__*/React.createElement("div", {
    className: "opts"
  }, ['centered', 'numbers', 'bloom'].map(h => /*#__PURE__*/React.createElement("button", {
    key: h,
    className: `ap-tweak-chip ${hero === h ? 'active' : ''}`,
    onClick: () => setHero(h)
  }, h)))));
};
window.PartnersTweaks = PartnersTweaks;
})(); } catch (e) { __ds_ns.__errors.push({ path: "PartnersTweaks.jsx", error: String((e && e.message) || e) }); }

// Positioning.jsx
try { (() => {
// Positioning.jsx — what Influex does / why partners exist
const Positioning = () => /*#__PURE__*/React.createElement("section", {
  className: "pn-pos"
}, /*#__PURE__*/React.createElement("div", {
  className: "pn-pos-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "pn-meta-row pn-meta-row--light",
  style: {
    marginBottom: 80
  }
}, /*#__PURE__*/React.createElement("hr", {
  className: "rule"
}), /*#__PURE__*/React.createElement("span", {
  className: "lbl"
}, "Chapter 01 \xA0\xB7\xA0 Positioning"), /*#__PURE__*/React.createElement("span", {
  className: "lbl lbl--r"
}, "Influex / Preferred Partners")), /*#__PURE__*/React.createElement("div", {
  className: "pn-pos-grid"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "pn-pos-kicker"
}, "What we do \xA0\xB7\xA0 Why this exists"), /*#__PURE__*/React.createElement("h2", {
  className: "pn-pos-h2"
}, "We design ", /*#__PURE__*/React.createElement("b", null, "iconic brands"), " &", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", null, "world-class"), " ", /*#__PURE__*/React.createElement("b", null, "websites."))), /*#__PURE__*/React.createElement("div", {
  className: "pn-pos-body"
}, /*#__PURE__*/React.createElement("p", null, "Influex serves industry icons, thought leaders, and category-defining entrepreneurs. Our craft is ", /*#__PURE__*/React.createElement("b", null, "brand identity and web design"), " \u2014 the ceremonial side of building authority."), /*#__PURE__*/React.createElement("p", null, "But a brand is only the stage. Our clients regularly ask us for the people who run advertising, content, CRM, operations, PR, and the systems that turn essence into ", /*#__PURE__*/React.createElement("b", null, "influence, impact, and income"), "."), /*#__PURE__*/React.createElement("p", null, "The Preferred Partner Network is our answer. A short, curated list of specialists we trust with our name \u2014 so the moment a client asks, we can confidently make an introduction."), /*#__PURE__*/React.createElement("div", {
  className: "pn-pos-pillars"
}, /*#__PURE__*/React.createElement("div", {
  className: "pn-pos-pillar"
}, /*#__PURE__*/React.createElement("div", {
  className: "num"
}, "01"), /*#__PURE__*/React.createElement("h4", null, "Our scope"), /*#__PURE__*/React.createElement("p", null, "Brand identity systems, websites, and visual authority for category-defining founders.")), /*#__PURE__*/React.createElement("div", {
  className: "pn-pos-pillar"
}, /*#__PURE__*/React.createElement("div", {
  className: "num"
}, "02"), /*#__PURE__*/React.createElement("h4", null, "Partner scope"), /*#__PURE__*/React.createElement("p", null, "Everything downstream of the brand: traffic, content, revenue systems, and media.")))))));
window.Positioning = Positioning;
})(); } catch (e) { __ds_ns.__errors.push({ path: "Positioning.jsx", error: String((e && e.message) || e) }); }

// Pricing.jsx
try { (() => {
// Pricing — dark floating card
const Pricing = () => /*#__PURE__*/React.createElement("section", {
  className: "ap-pricing",
  id: "pricing"
}, /*#__PURE__*/React.createElement("div", {
  className: "ap-pricing-bloom"
}), /*#__PURE__*/React.createElement("div", {
  className: "ap-price-card"
}, /*#__PURE__*/React.createElement("div", {
  className: "ap-price-left"
}, /*#__PURE__*/React.createElement("div", {
  className: "ap-price-tag"
}, "CEO CREATIVE CLARITY CONSULT"), /*#__PURE__*/React.createElement("h3", {
  className: "ap-price-h3"
}, "Get my brain on ", /*#__PURE__*/React.createElement("b", null, "your brand"), " \u2014 at 75% off, fully refundable."), /*#__PURE__*/React.createElement("p", {
  className: "ap-price-body"
}, "We'll embark on our Essence Extraction process and may start to map out your site strategy, massage your messaging, or upgrade your offers along the way."), /*#__PURE__*/React.createElement("div", {
  className: "ap-price-amount-row"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "ap-price-strike"
}, "$800"), /*#__PURE__*/React.createElement("div", {
  className: "ap-price-big"
}, "$200", /*#__PURE__*/React.createElement("sup", null)), /*#__PURE__*/React.createElement("div", {
  className: "ap-price-unit"
}, "FIRST-TIME RATE \xB7 APPLIED AS DEPOSIT")))), /*#__PURE__*/React.createElement("div", {
  className: "ap-price-right"
}, /*#__PURE__*/React.createElement("ul", {
  className: "ap-price-features"
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "ap-price-check"
}, "\u2713"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
  style: {
    color: 'var(--fg-1)'
  }
}, "60-minute 1:1 consult"), " with Dmitriy Kozlov, Chief Expression Officer.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "ap-price-check"
}, "\u2713"), /*#__PURE__*/React.createElement("span", null, "Live ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: 'var(--fg-1)'
  }
}, "audit of your current site"), " for lead & opportunity leaks.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "ap-price-check"
}, "\u2713"), /*#__PURE__*/React.createElement("span", null, "Clarity on your ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: 'var(--fg-1)'
  }
}, "brand triangle"), " \u2014 personal, company, product.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "ap-price-check"
}, "\u2713"), /*#__PURE__*/React.createElement("span", null, "Naming, messaging & offer architecture feedback.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "ap-price-check"
}, "\u2713"), /*#__PURE__*/React.createElement("span", null, "Tech-stack guidance whether or not you hire us.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "ap-price-check"
}, "\u2713"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
  style: {
    color: 'var(--fg-1)'
  }
}, "10X ROI guaranteed"), " \u2014 or your deposit is refunded."))), /*#__PURE__*/React.createElement("div", {
  className: "ap-price-cta-row"
}, /*#__PURE__*/React.createElement("a", {
  href: "#apply-form",
  className: "ap-pill ap-pill--filled"
}, "BOOK YOUR CONSULT"), /*#__PURE__*/React.createElement("span", {
  className: "ap-price-refund"
}, "Deposit applies to a full engagement if we proceed.")))));
window.Pricing = Pricing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "Pricing.jsx", error: String((e && e.message) || e) }); }

// Standard.jsx
try { (() => {
// Standard.jsx — selectivity statement
const Standard = () => /*#__PURE__*/React.createElement("section", {
  className: "pn-standard",
  id: "standard"
}, /*#__PURE__*/React.createElement("div", {
  className: "pn-standard-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "pn-standard-kicker"
}, "The Partner Standard"), /*#__PURE__*/React.createElement("h2", {
  className: "pn-standard-statement"
}, "This is a ", /*#__PURE__*/React.createElement("i", null, "curated"), " network.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "Not everyone is accepted.")), /*#__PURE__*/React.createElement("div", {
  className: "pn-standard-rule"
}), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 'clamp(17px, 1.5vw, 22px)',
    lineHeight: 1.55,
    color: 'rgba(254,247,223,0.72)',
    maxWidth: 720,
    margin: '0 auto',
    textWrap: 'balance'
  }
}, "We turn down roughly nine of every ten applications. Not because the work is poor \u2014 but because our name travels with every introduction, and we will only say it for people we would hire ourselves."), /*#__PURE__*/React.createElement("div", {
  className: "pn-standard-criteria"
}, /*#__PURE__*/React.createElement("div", {
  className: "pn-standard-crit"
}, /*#__PURE__*/React.createElement("div", {
  className: "k"
}, "01"), /*#__PURE__*/React.createElement("div", {
  className: "lbl"
}, "Craft"), /*#__PURE__*/React.createElement("div", {
  className: "v"
}, "Best-in-class output. No template shops, no generalists masquerading as specialists.")), /*#__PURE__*/React.createElement("div", {
  className: "pn-standard-crit"
}, /*#__PURE__*/React.createElement("div", {
  className: "k"
}, "02"), /*#__PURE__*/React.createElement("div", {
  className: "lbl"
}, "Track record"), /*#__PURE__*/React.createElement("div", {
  className: "v"
}, "Demonstrable outcomes with founders, operators, and public-facing experts.")), /*#__PURE__*/React.createElement("div", {
  className: "pn-standard-crit"
}, /*#__PURE__*/React.createElement("div", {
  className: "k"
}, "03"), /*#__PURE__*/React.createElement("div", {
  className: "lbl"
}, "Character"), /*#__PURE__*/React.createElement("div", {
  className: "v"
}, "Direct, generous, and unafraid to say no when the fit isn't right.")), /*#__PURE__*/React.createElement("div", {
  className: "pn-standard-crit"
}, /*#__PURE__*/React.createElement("div", {
  className: "k"
}, "04"), /*#__PURE__*/React.createElement("div", {
  className: "lbl"
}, "Alignment"), /*#__PURE__*/React.createElement("div", {
  className: "v"
}, "An operating philosophy compatible with ours: essence, expression, authority.")))));
window.Standard = Standard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "Standard.jsx", error: String((e && e.message) || e) }); }

// Steps.jsx
try { (() => {
// Steps — three-step flow
const Steps = () => /*#__PURE__*/React.createElement("section", {
  className: "ap-steps"
}, /*#__PURE__*/React.createElement("div", {
  className: "ap-steps-hd"
}, /*#__PURE__*/React.createElement("div", {
  className: "ap-steps-kicker"
}, "HOW APPLYING WORKS"), /*#__PURE__*/React.createElement("h2", {
  className: "ap-steps-h2"
}, "Three steps to ", /*#__PURE__*/React.createElement("b", null, "your Creative Clarity Consult."))), /*#__PURE__*/React.createElement("div", {
  className: "ap-steps-row"
}, /*#__PURE__*/React.createElement("div", {
  className: "ap-step"
}, /*#__PURE__*/React.createElement("div", {
  className: "ap-step-num"
}, "01"), /*#__PURE__*/React.createElement("div", {
  className: "ap-step-label"
}, "CONTACT INFO"), /*#__PURE__*/React.createElement("h3", {
  className: "ap-step-title"
}, "Start your application"), /*#__PURE__*/React.createElement("p", {
  className: "ap-step-body"
}, "Enter your contact info so we can open your file. Takes less than a minute.")), /*#__PURE__*/React.createElement("div", {
  className: "ap-step"
}, /*#__PURE__*/React.createElement("div", {
  className: "ap-step-num"
}, "02"), /*#__PURE__*/React.createElement("div", {
  className: "ap-step-label"
}, "VISION & GOALS"), /*#__PURE__*/React.createElement("h3", {
  className: "ap-step-title"
}, "Tell us about your brand"), /*#__PURE__*/React.createElement("p", {
  className: "ap-step-body"
}, "Share your business, vision, and growth goals so we can create 10X ROI on our first call.")), /*#__PURE__*/React.createElement("div", {
  className: "ap-step"
}, /*#__PURE__*/React.createElement("div", {
  className: "ap-step-num"
}, "03"), /*#__PURE__*/React.createElement("div", {
  className: "ap-step-label"
}, "BOOK & PAY"), /*#__PURE__*/React.createElement("h3", {
  className: "ap-step-title"
}, "Pick your time \xB7 $200 deposit"), /*#__PURE__*/React.createElement("p", {
  className: "ap-step-body"
}, "Pay for the consult and book your preferred slot on our calendar. Get excited."))));
window.Steps = Steps;
})(); } catch (e) { __ds_ns.__errors.push({ path: "Steps.jsx", error: String((e && e.message) || e) }); }

// TrustedBy.jsx
try { (() => {
// TrustedBy strip
const TrustedBy = () => {
  const marks = [{
    label: 'JIM KWIK'
  }, {
    label: 'GENIUS NETWORK'
  }, {
    label: 'LEWIS HOWES'
  }, {
    label: 'MATTHEW HUSSEY'
  }, {
    label: 'DR. POMPA'
  }, {
    label: 'ADOUTREACH'
  }, {
    label: 'RISE NATION'
  }, {
    label: 'TOP DOG LAW'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "ap-trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-trust-label"
  }, "Trusted By ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'normal',
      color: 'var(--color-champagne)'
    }
  }, "200+"), " Industry Icons & Innovators"), /*#__PURE__*/React.createElement("div", {
    className: "ap-trust-marquee"
  }, marks.map((m, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    className: "ap-trust-mark"
  }, m.label))));
};
window.TrustedBy = TrustedBy;
})(); } catch (e) { __ds_ns.__errors.push({ path: "TrustedBy.jsx", error: String((e && e.message) || e) }); }

// Tweaks.jsx
try { (() => {
// Tweaks panel — host-toggleable
const Tweaks = () => {
  const [shown, setShown] = React.useState(false);
  const [accent, setAccent] = React.useState(window.__TWEAKS__.accent || 'champagne');
  const [density, setDensity] = React.useState(window.__TWEAKS__.density || 'relaxed');
  React.useEffect(() => {
    const handler = e => {
      if (e.data && e.data.type === '__activate_edit_mode') setShown(true);
      if (e.data && e.data.type === '__deactivate_edit_mode') setShown(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);
  React.useEffect(() => {
    document.body.setAttribute('data-accent', accent);
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits: {
        accent
      }
    }, '*');
  }, [accent]);
  React.useEffect(() => {
    document.body.setAttribute('data-density', density);
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits: {
        density
      }
    }, '*');
  }, [density]);
  return /*#__PURE__*/React.createElement("div", {
    className: `ap-tweaks ${shown ? 'show' : ''}`
  }, /*#__PURE__*/React.createElement("h4", null, "TWEAKS"), /*#__PURE__*/React.createElement("div", {
    className: "ap-tweaks-row"
  }, /*#__PURE__*/React.createElement("label", null, "Accent color"), /*#__PURE__*/React.createElement("div", {
    className: "opts"
  }, ['champagne', 'mauve', 'rose', 'emerald'].map(a => /*#__PURE__*/React.createElement("button", {
    key: a,
    className: `ap-tweak-chip ${accent === a ? 'active' : ''}`,
    onClick: () => setAccent(a)
  }, a)))), /*#__PURE__*/React.createElement("div", {
    className: "ap-tweaks-row"
  }, /*#__PURE__*/React.createElement("label", null, "Density"), /*#__PURE__*/React.createElement("div", {
    className: "opts"
  }, ['compact', 'relaxed', 'editorial'].map(d => /*#__PURE__*/React.createElement("button", {
    key: d,
    className: `ap-tweak-chip ${density === d ? 'active' : ''}`,
    onClick: () => setDensity(d)
  }, d)))));
};
window.Tweaks = Tweaks;
})(); } catch (e) { __ds_ns.__errors.push({ path: "Tweaks.jsx", error: String((e && e.message) || e) }); }

// WhoFor.jsx
try { (() => {
// WhoFor.jsx — Who This Is For
const WhoFor = () => {
  const cards = [{
    n: '01',
    t: 'Best-in-class operators',
    d: 'Specialists at the top of their craft — the person or team a founder would be lucky to work with.'
  }, {
    n: '02',
    t: 'Proven client results',
    d: 'A catalogue of outcomes you can speak to: numbers, case studies, named references.'
  }, {
    n: '03',
    t: 'Elevated client experience',
    d: 'Communication, taste, and follow-through worthy of a founder we introduced you to.'
  }, {
    n: '04',
    t: 'Open to mutual referral',
    d: 'You understand collaboration compounds. You refer well when the fit is right, and receive well when it isn\u2019t.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "pn-for"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-for-bloom"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pn-for-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn-meta-row",
    style: {
      marginBottom: 80
    }
  }, /*#__PURE__*/React.createElement("hr", {
    className: "rule"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Chapter 02 \xA0\xB7\xA0 The Criteria"), /*#__PURE__*/React.createElement("span", {
    className: "lbl lbl--r"
  }, "Who this network is for")), /*#__PURE__*/React.createElement("div", {
    className: "pn-for-hd"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pn-for-kicker"
  }, "Who this is for"), /*#__PURE__*/React.createElement("h2", {
    className: "pn-for-h2"
  }, "Four marks of a partner", /*#__PURE__*/React.createElement("br", null), "we'll ", /*#__PURE__*/React.createElement("b", null, "say your name for."))), /*#__PURE__*/React.createElement("p", {
    className: "pn-for-lede"
  }, "Most applications we read come from capable operators. We accept the ones who clear all four \u2014 not three of four. The standard is the point.")), /*#__PURE__*/React.createElement("div", {
    className: "pn-for-grid"
  }, cards.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.n,
    className: "pn-for-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, c.n), /*#__PURE__*/React.createElement("h4", null, c.t), /*#__PURE__*/React.createElement("p", null, c.d), /*#__PURE__*/React.createElement("div", {
    className: "rule-bottom"
  }))))));
};
window.WhoFor = WhoFor;
})(); } catch (e) { __ds_ns.__errors.push({ path: "WhoFor.jsx", error: String((e && e.message) || e) }); }

// admin.jsx
try { (() => {
/* ─────────────────────────────────────────────────────────────────────
   ADMIN PANEL — Clients + universal Template + submissions view.
   The sitemap & section structure are universal (one template, every
   client follows it). Admin edits the template once, then everyone gets it.
   ───────────────────────────────────────────────────────────────────── */

function Admin() {
  const store = useStore();
  const session = store.state.session;
  React.useEffect(() => {
    if (!session?.admin) window.location.hash = "#/login";
  }, [session?.admin]);
  if (!session?.admin) return null;
  const hash = window.location.hash || "";
  const matchClient = hash.match(/^#\/admin\/client\/([^/]+)$/);
  const view = matchClient ? "client-detail" : hash.startsWith("#/admin/template") ? "template" : "clients";
  const clientId = matchClient ? matchClient[1] : null;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand-mark"
  }), /*#__PURE__*/React.createElement("span", null, "INFLUEX\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)"
    }
  }, "/"), "\xA0\xA0Admin Console")), /*#__PURE__*/React.createElement("div", {
    className: "admin-nav"
  }, /*#__PURE__*/React.createElement("a", {
    className: `admin-nav-link ${view === "clients" || view === "client-detail" ? "active" : ""}`,
    href: "#/admin"
  }, "Clients"), /*#__PURE__*/React.createElement("a", {
    className: `admin-nav-link ${view === "template" ? "active" : ""}`,
    href: "#/admin/template"
  }, "Template")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip chip-primary"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip-dot"
  }), "Admin"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: () => {
      if (confirm("Reset all clients, the template and submissions to factory defaults?")) {
        store.factoryReset();
        window.location.hash = "#/login";
      }
    }
  }, "Factory reset"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: () => {
      store.logout();
      window.location.hash = "#/login";
    }
  }, "Sign out"))), view === "clients" && /*#__PURE__*/React.createElement(ClientList, null), view === "client-detail" && /*#__PURE__*/React.createElement(ClientDetail, {
    clientId: clientId
  }), view === "template" && /*#__PURE__*/React.createElement(TemplateEditor, null));
}

/* ─────────────────────────────────────────────────────────────────────
   CLIENT LIST
   ───────────────────────────────────────────────────────────────────── */
function ClientList() {
  const store = useStore();
  const [showNew, setShowNew] = React.useState(false);
  const clients = Object.values(store.state.clients);
  return /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "h-eyebrow eyebrow"
  }, "Clients"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display",
    style: {
      fontSize: 56,
      margin: "12px 0 8px"
    }
  }, clients.length, " active ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic",
      color: "var(--cream-3)"
    }
  }, "copy extractions")), /*#__PURE__*/React.createElement("div", {
    className: "t-muted",
    style: {
      fontSize: 14
    }
  }, "Every client follows the same universal template. ", /*#__PURE__*/React.createElement("a", {
    href: "#/admin/template",
    style: {
      color: "var(--cream-3)",
      textDecoration: "underline",
      textUnderlineOffset: 3
    }
  }, "Edit the template \u2192"))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => setShowNew(true)
  }, "+ New Client")), clients.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-eyebrow",
    style: {
      marginBottom: 12
    }
  }, "No clients yet"), /*#__PURE__*/React.createElement("div", {
    className: "t-muted"
  }, "Create your first client to generate an access key.")) : /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "client-row",
    style: {
      borderBottom: "1px solid var(--line)",
      color: "var(--gold-2)",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("div", null, "Client"), /*#__PURE__*/React.createElement("div", null, "Access key"), /*#__PURE__*/React.createElement("div", null, "Progress"), /*#__PURE__*/React.createElement("div", null, "Updated"), /*#__PURE__*/React.createElement("div", null)), clients.map(c => /*#__PURE__*/React.createElement(ClientRow, {
    key: c.id,
    client: c
  }))), showNew && /*#__PURE__*/React.createElement(NewClientModal, {
    onClose: () => setShowNew(false)
  }));
}
function ClientRow({
  client
}) {
  const store = useStore();
  const submissions = store.state.submissions[client.id] || {};
  const sitemap = store.state.template.sitemap;
  const stats = React.useMemo(() => {
    let complete = 0;
    let latest = client.createdAt;
    for (const p of sitemap) {
      const s = submissions[p.id];
      if (s?.status === "complete") complete++;
      if (s?.updatedAt && s.updatedAt > latest) latest = s.updatedAt;
    }
    return {
      complete,
      total: sitemap.length,
      latest,
      pct: sitemap.length ? Math.round(complete / sitemap.length * 100) : 0
    };
  }, [client, submissions, sitemap]);
  function copyKey(e) {
    e.stopPropagation();
    navigator.clipboard.writeText(client.key);
    const el = e.currentTarget;
    const orig = el.textContent;
    el.textContent = "✓ Copied";
    setTimeout(() => {
      el.textContent = orig;
    }, 1200);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "client-row",
    onClick: () => window.location.hash = `#/admin/client/${client.id}`,
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, client.name), /*#__PURE__*/React.createElement("div", {
    className: "name-sub"
  }, client.projectName)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "key",
    onClick: copyKey,
    title: "Click to copy"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cream-3)"
    }
  }, "\u2398"), " ", client.key)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--cream-1)",
      letterSpacing: "0.05em"
    }
  }, stats.complete, "/", stats.total, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-2)"
    }
  }, "(", stats.pct, "%)")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: "rgba(189,131,50,0.12)",
      borderRadius: 2,
      marginTop: 6,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${stats.pct}%`,
      height: "100%",
      background: "var(--cream-3)",
      transition: "width 0.3s"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "t-mono",
    style: {
      fontSize: 11,
      color: "var(--cream-2)",
      letterSpacing: "0.06em"
    }
  }, timeAgo(stats.latest)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-mono",
    style: {
      color: "var(--gold-2)",
      fontSize: 18
    }
  }, "\u2192")));
}
function NewClientModal({
  onClose
}) {
  const store = useStore();
  const [name, setName] = React.useState("");
  const [projectName, setProjectName] = React.useState("");
  function create() {
    if (!name.trim()) return;
    const id = store.createClient({
      name: name.trim(),
      projectName: projectName.trim() || "site.com"
    });
    window.location.hash = `#/admin/client/${id}`;
    onClose();
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-eyebrow",
    style: {
      marginBottom: 12
    }
  }, "New Client"), /*#__PURE__*/React.createElement("h3", null, "Create a copy extraction"), /*#__PURE__*/React.createElement("p", null, "A unique access key is generated. The client lands on the same universal sitemap and section structure \u2014 managed in the Template tab."), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "Client Name"), /*#__PURE__*/React.createElement("input", {
    className: "input",
    autoFocus: true,
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "e.g. Ted Saunders"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "Project / Domain"), /*#__PURE__*/React.createElement("input", {
    className: "input",
    value: projectName,
    onChange: e => setProjectName(e.target.value),
    placeholder: "e.g. tedsaunders.com"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 12,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: create
  }, "Create client \u2192"))));
}

/* ─────────────────────────────────────────────────────────────────────
   CLIENT DETAIL — Submissions & Settings only (no sitemap editing).
   ───────────────────────────────────────────────────────────────────── */
function ClientDetail({
  clientId
}) {
  const store = useStore();
  const client = store.state.clients[clientId];
  const [tab, setTab] = React.useState("submissions");
  React.useEffect(() => {
    if (!client) window.location.hash = "#/admin";
  }, [client]);
  if (!client) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/admin",
    className: "t-mono",
    style: {
      fontSize: 11,
      color: "var(--cream-2)",
      letterSpacing: "0.22em",
      textTransform: "uppercase"
    }
  }, "\u2190 All clients"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginTop: 18,
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "h-eyebrow eyebrow"
  }, "Client"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display",
    style: {
      fontSize: 56,
      margin: "10px 0 4px"
    }
  }, client.name), /*#__PURE__*/React.createElement("div", {
    className: "t-muted",
    style: {
      fontSize: 15
    }
  }, client.projectName)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-mono",
    style: {
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--gold-2)"
    }
  }, "Access key"), /*#__PURE__*/React.createElement("span", {
    className: "key",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      letterSpacing: "0.2em",
      padding: "8px 14px",
      border: "1px solid var(--line)",
      borderRadius: 6,
      background: "var(--ink-2)",
      color: "var(--cream-3)"
    }
  }, client.key)), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: () => navigator.clipboard.writeText(client.key)
  }, "Copy"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: () => {
      if (confirm("Regenerate this key? The old one will stop working.")) store.regenKey(clientId);
    }
  }, "Regen"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-danger btn-sm",
    onClick: () => {
      if (confirm(`Delete ${client.name} and all their submissions?`)) {
        store.deleteClient(clientId);
        window.location.hash = "#/admin";
      }
    }
  }, "Delete"))), /*#__PURE__*/React.createElement("div", {
    className: "admin-tabs"
  }, /*#__PURE__*/React.createElement("button", {
    className: `admin-tab ${tab === "submissions" ? "active" : ""}`,
    onClick: () => setTab("submissions")
  }, "Submissions"), /*#__PURE__*/React.createElement("button", {
    className: `admin-tab ${tab === "settings" ? "active" : ""}`,
    onClick: () => setTab("settings")
  }, "Settings")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, tab === "submissions" && /*#__PURE__*/React.createElement(SubmissionsTab, {
    clientId: clientId
  }), tab === "settings" && /*#__PURE__*/React.createElement(SettingsTab, {
    clientId: clientId
  })));
}

/* ─────────────────────────────────────────────────────────────────────
   TEMPLATE EDITOR — the universal sitemap + sections, used by everyone.
   ───────────────────────────────────────────────────────────────────── */
function TemplateEditor() {
  const store = useStore();
  const sitemap = store.state.template.sitemap;
  const [selectedPageId, setSelectedPageId] = React.useState(sitemap[0]?.id || null);
  React.useEffect(() => {
    if (!sitemap.find(p => p.id === selectedPageId)) {
      setSelectedPageId(sitemap[0]?.id || null);
    }
  }, [sitemap, selectedPageId]);
  function addPage() {
    const id = "p_" + uid();
    store.addTemplatePage({
      id,
      name: "New Page",
      navLevel: "Primary",
      purpose: "",
      audience: "All",
      parentId: null
    });
    setSelectedPageId(id);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 32,
      flexWrap: "wrap",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "h-eyebrow eyebrow"
  }, "Universal Template"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display",
    style: {
      fontSize: 56,
      margin: "12px 0 8px"
    }
  }, "One sitemap, ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic",
      color: "var(--cream-3)"
    }
  }, "every client.")), /*#__PURE__*/React.createElement("div", {
    className: "t-muted",
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      maxWidth: 620
    }
  }, "Edit the page list and section structure here. Every client \u2014 existing and new \u2014 sees this exact canvas the moment they sign in.")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: addPage
  }, "+ Add page")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 28,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-eyebrow"
  }, "Pages \xB7 ", sitemap.length), /*#__PURE__*/React.createElement("div", {
    className: "t-muted",
    style: {
      fontSize: 12
    }
  }, "Click a row to edit its sections \u2192")), sitemap.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-muted"
  }, "No pages yet. Add the first page to begin.")) : /*#__PURE__*/React.createElement("div", {
    className: "sitemap-builder"
  }, sitemap.map(page => {
    const isParent = page.parentId == null;
    const parentOptions = sitemap.filter(p => p.id !== page.id && p.parentId == null);
    const selected = selectedPageId === page.id;
    return /*#__PURE__*/React.createElement("div", {
      key: page.id,
      className: `sitemap-page ${!isParent ? "sub" : ""}`,
      style: {
        outline: selected ? "1px solid var(--gold-1)" : "none",
        cursor: "pointer"
      },
      onClick: () => setSelectedPageId(page.id)
    }, /*#__PURE__*/React.createElement("div", {
      className: "handle",
      title: "Reorder",
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("button", {
      className: "rte-tool",
      style: {
        width: 18,
        height: 14,
        fontSize: 9
      },
      onClick: () => store.moveTemplatePage(page.id, -1)
    }, "\u25B2"), /*#__PURE__*/React.createElement("button", {
      className: "rte-tool",
      style: {
        width: 18,
        height: 14,
        fontSize: 9
      },
      onClick: () => store.moveTemplatePage(page.id, +1)
    }, "\u25BC")), /*#__PURE__*/React.createElement("input", {
      className: "input",
      value: page.name,
      onClick: e => e.stopPropagation(),
      onChange: e => store.updateTemplatePage(page.id, {
        name: e.target.value
      })
    }), /*#__PURE__*/React.createElement("select", {
      className: "select",
      value: page.navLevel,
      onClick: e => e.stopPropagation(),
      onChange: e => store.updateTemplatePage(page.id, {
        navLevel: e.target.value
      })
    }, /*#__PURE__*/React.createElement("option", null, "Primary"), /*#__PURE__*/React.createElement("option", null, "Secondary"), /*#__PURE__*/React.createElement("option", null, "Utility")), /*#__PURE__*/React.createElement("select", {
      className: "select",
      value: page.parentId || "",
      onClick: e => e.stopPropagation(),
      onChange: e => store.updateTemplatePage(page.id, {
        parentId: e.target.value || null
      })
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "\u2014 no parent \u2014"), parentOptions.map(p => /*#__PURE__*/React.createElement("option", {
      key: p.id,
      value: p.id
    }, p.name))), /*#__PURE__*/React.createElement("button", {
      className: "rte-tool",
      title: "Delete",
      onClick: e => {
        e.stopPropagation();
        if (confirm(`Delete "${page.name}" from the template?\n\nThis also removes any submissions clients made for this page.`)) {
          store.deleteTemplatePage(page.id);
        }
      }
    }, "\xD7"));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      position: "sticky",
      top: 28,
      alignSelf: "flex-start"
    }
  }, selectedPageId ? /*#__PURE__*/React.createElement(TemplatePageDetailEditor, {
    pageId: selectedPageId
  }) : /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-muted"
  }, "Select a page to edit its sections.")))));
}
function TemplatePageDetailEditor({
  pageId
}) {
  const store = useStore();
  const page = store.state.template.sitemap.find(p => p.id === pageId);
  const sections = store.state.template.sections[pageId] || [];
  if (!page) return null;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "h-eyebrow",
    style: {
      marginBottom: 6
    }
  }, "Page detail"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontWeight: 300,
      fontSize: 28,
      letterSpacing: "-0.02em",
      margin: "0 0 18px"
    }
  }, page.name), /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "Primary purpose"), /*#__PURE__*/React.createElement("input", {
    className: "input",
    value: page.purpose || "",
    onChange: e => store.updateTemplatePage(page.id, {
      purpose: e.target.value
    }),
    placeholder: "e.g. Introduction + self-selection"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "Audience"), /*#__PURE__*/React.createElement("input", {
    className: "input",
    value: page.audience || "",
    onChange: e => store.updateTemplatePage(page.id, {
      audience: e.target.value
    }),
    placeholder: "e.g. Clients + Investors"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "divider"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "h-eyebrow"
  }, "Sections"), /*#__PURE__*/React.createElement("div", {
    className: "t-muted",
    style: {
      fontSize: 12,
      marginTop: 4
    }
  }, "What the client fills out, one step at a time.")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => store.addTemplateSection(pageId, "New Section")
  }, "+ Section")), sections.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-muted"
  }, "No sections yet.")) : /*#__PURE__*/React.createElement("div", {
    className: "section-builder"
  }, sections.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "section-row",
    key: s.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "order"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("input", {
    className: "input",
    value: s.name,
    onChange: e => store.updateTemplateSection(pageId, s.id, {
      name: e.target.value
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "rte-tool",
    style: {
      width: 24,
      height: 24,
      fontSize: 10
    },
    title: "Move up",
    onClick: () => store.moveTemplateSection(pageId, s.id, -1)
  }, "\u25B2"), /*#__PURE__*/React.createElement("button", {
    className: "rte-tool",
    style: {
      width: 24,
      height: 24,
      fontSize: 10
    },
    title: "Move down",
    onClick: () => store.moveTemplateSection(pageId, s.id, +1)
  }, "\u25BC"), /*#__PURE__*/React.createElement("button", {
    className: "rte-tool",
    title: "Delete section",
    onClick: () => {
      if (confirm(`Delete section "${s.name}"?`)) store.deleteTemplateSection(pageId, s.id);
    }
  }, "\xD7"))))));
}

/* ─────────────────────────────────────────────────────────────────────
   SUBMISSIONS TAB
   ───────────────────────────────────────────────────────────────────── */
function SubmissionsTab({
  clientId
}) {
  const store = useStore();
  const client = store.state.clients[clientId];
  const sitemap = store.state.template.sitemap;
  const subs = store.state.submissions[clientId] || {};
  const [expanded, setExpanded] = React.useState(() => {
    const init = {};
    sitemap.forEach(p => {
      init[p.id] = subs[p.id]?.status !== undefined && subs[p.id]?.status !== "not-started";
    });
    return init;
  });
  function toggle(id) {
    setExpanded(e => ({
      ...e,
      [id]: !e[id]
    }));
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 20,
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-eyebrow"
  }, "Client submissions"), /*#__PURE__*/React.createElement("div", {
    className: "t-mono t-muted",
    style: {
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase"
    }
  }, "Read-only \xB7 ", client.name.split(" ")[0], "'s answers across every page")), /*#__PURE__*/React.createElement("div", {
    className: "submission-view"
  }, sitemap.map(page => {
    const sub = subs[page.id];
    const sectionDefs = store.state.template.sections[page.id] || [];
    const status = sub?.status || "not-started";
    const pct = pageProgress(sub, sectionDefs);
    const isOpen = expanded[page.id];
    return /*#__PURE__*/React.createElement("div", {
      className: "submission-page",
      key: page.id
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 18,
        cursor: "pointer"
      },
      onClick: () => toggle(page.id)
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-eyebrow",
      style: {
        width: 80
      }
    }, page.navLevel), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        fontWeight: 300,
        letterSpacing: "-0.01em",
        color: "var(--cream-1)"
      }
    }, page.name), /*#__PURE__*/React.createElement("div", {
      className: "t-muted",
      style: {
        fontSize: 13
      }
    }, page.purpose)), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 80,
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        color: "var(--cream-2)"
      }
    }, pct, "%"), /*#__PURE__*/React.createElement(StatusChip, {
      status: status
    }), /*#__PURE__*/React.createElement("span", {
      className: "t-mono",
      style: {
        color: "var(--gold-2)",
        fontSize: 18,
        transform: isOpen ? "rotate(90deg)" : "none",
        transition: "transform 0.2s"
      }
    }, "\u2192")), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 28
      }
    }, sectionDefs.map(sd => {
      const data = (sub?.sections || {})[sd.id] || {};
      return /*#__PURE__*/React.createElement(SubmissionSection, {
        key: sd.id,
        name: sd.name,
        data: data
      });
    }), (sub?.customSections || []).map(cs => /*#__PURE__*/React.createElement(SubmissionSection, {
      key: cs.id,
      name: `${cs.name}  ·  (custom)`,
      data: cs
    })), sub?.additional && /*#__PURE__*/React.createElement("div", {
      className: "submission-section"
    }, /*#__PURE__*/React.createElement("h4", null, "Additional Canvas"), /*#__PURE__*/React.createElement("div", {
      className: "val rte-body",
      style: {
        background: "var(--ink-3)",
        padding: 18,
        borderRadius: 8,
        border: "1px solid var(--line-faint)"
      },
      dangerouslySetInnerHTML: {
        __html: sub.additional
      }
    })), !sub && /*#__PURE__*/React.createElement("div", {
      className: "empty"
    }, /*#__PURE__*/React.createElement("div", {
      className: "t-muted"
    }, "Nothing submitted yet for this page."))));
  })));
}
function SubmissionSection({
  name,
  data
}) {
  const empty = !data.headline && !data.subheadline && !data.description && !data.notes && !(data.images && data.images.length) && !data.ctaPrimary && !data.ctaSecondary;
  return /*#__PURE__*/React.createElement("div", {
    className: "submission-section"
  }, /*#__PURE__*/React.createElement("h4", null, name), empty ? /*#__PURE__*/React.createElement("div", {
    className: "val empty"
  }, "\u2014 not filled in yet \u2014") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FieldShow, {
    label: "Headline",
    value: data.headline
  }), /*#__PURE__*/React.createElement(FieldShow, {
    label: "Subheadline",
    value: data.subheadline
  }), /*#__PURE__*/React.createElement(FieldShow, {
    label: "Description / Body",
    value: data.description
  }), (data.ctaPrimary || data.ctaSecondary) && /*#__PURE__*/React.createElement(FieldShow, {
    label: "CTAs",
    value: [data.ctaPrimary, data.ctaSecondary].filter(Boolean).join("    /    ")
  }), data.images && data.images.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "field-show"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Images (", data.images.length, ")"), /*#__PURE__*/React.createElement("div", {
    className: "thumbgrid"
  }, data.images.map((img, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: img.data,
    alt: img.name,
    title: img.name
  })))), /*#__PURE__*/React.createElement(FieldShow, {
    label: "Notes",
    value: data.notes
  })));
}
function FieldShow({
  label,
  value
}) {
  if (!value) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "field-show"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, value));
}

/* ─────────────────────────────────────────────────────────────────────
   SETTINGS TAB
   ───────────────────────────────────────────────────────────────────── */
function SettingsTab({
  clientId
}) {
  const store = useStore();
  const client = store.state.clients[clientId];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 600
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-eyebrow",
    style: {
      marginBottom: 18
    }
  }, "Client settings"), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "Client name"), /*#__PURE__*/React.createElement("input", {
    className: "input",
    value: client.name,
    onChange: e => store.updateClient(clientId, {
      name: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "Project / Domain"), /*#__PURE__*/React.createElement("input", {
    className: "input",
    value: client.projectName,
    onChange: e => store.updateClient(clientId, {
      projectName: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "Access key"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "input input-mono",
    value: client.key,
    readOnly: true,
    style: {
      letterSpacing: "0.22em",
      color: "var(--cream-3)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => store.regenKey(clientId)
  }, "Regenerate")))));
}

// ───── UTIL ─────
function timeAgo(ts) {
  if (!ts) return "—";
  const d = (Date.now() - ts) / 1000;
  if (d < 60) return "just now";
  if (d < 3600) return Math.round(d / 60) + "m ago";
  if (d < 86400) return Math.round(d / 3600) + "h ago";
  return Math.round(d / 86400) + "d ago";
}
Object.assign(window, {
  Admin
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "admin.jsx", error: String((e && e.message) || e) }); }

// app.jsx
try { (() => {
/* ─────────────────────────────────────────────────────────────────────
   APP — Hash routing root.
     #/login        Login
     #/dashboard    Client dashboard
     #/canvas/:id   Copy canvas
     #/admin        Admin client list
     #/admin/:id    Admin client detail
   ───────────────────────────────────────────────────────────────────── */

function App() {
  const [hash, setHash] = React.useState(window.location.hash || "#/login");
  React.useEffect(() => {
    function onHash() {
      setHash(window.location.hash || "#/login");
    }
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Initial route: auto-route based on session if we land on root or default
  React.useEffect(() => {
    const raw = localStorage.getItem("influex_copyextract_v1");
    if (!raw) return;
    try {
      const s = JSON.parse(raw);
      if (!window.location.hash || window.location.hash === "#/" || window.location.hash === "") {
        if (s.session?.admin) window.location.hash = "#/admin";else if (s.session?.clientId) window.location.hash = "#/dashboard";else window.location.hash = "#/login";
      }
    } catch {}
  }, []);
  let view = null;
  if (hash.startsWith("#/login") || hash === "#/" || hash === "") view = /*#__PURE__*/React.createElement(Login, null);else if (hash.startsWith("#/dashboard")) view = /*#__PURE__*/React.createElement(Dashboard, null);else if (hash.startsWith("#/canvas/")) view = /*#__PURE__*/React.createElement(Canvas, null);else if (hash.startsWith("#/admin")) view = /*#__PURE__*/React.createElement(Admin, null);else view = /*#__PURE__*/React.createElement(Login, null);
  return /*#__PURE__*/React.createElement("div", {
    className: "app-root"
  }, view);
}
const Root = () => /*#__PURE__*/React.createElement(StateProvider, null, /*#__PURE__*/React.createElement(App, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(Root, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "app.jsx", error: String((e && e.message) || e) }); }

// canvas.jsx
try { (() => {
/* ─────────────────────────────────────────────────────────────────────
   COPY CANVAS — Typeform-style progressive flow with autosave.
   Steps: Intro → [each section] → [each custom section] → Add another?
          → Additional Canvas (rich text) → Mark complete.
   ───────────────────────────────────────────────────────────────────── */

function Canvas() {
  const store = useStore();
  const session = store.state.session;
  const clientId = session?.clientId;
  const client = clientId ? store.state.clients[clientId] : null;
  const hashMatch = (window.location.hash || "").match(/^#\/canvas\/(.+)$/);
  const pageId = hashMatch ? hashMatch[1] : null;
  const page = pageId ? store.state.template.sitemap.find(p => p.id === pageId) : null;

  // Redirect on missing context — must be unconditional to keep hook order stable.
  React.useEffect(() => {
    if (!client) window.location.hash = "#/login";else if (!page) window.location.hash = "#/dashboard";
  }, [client, page]);
  const sectionDefs = pageId && store.state.template.sections[pageId] || [];
  const submission = clientId && pageId ? (store.state.submissions[clientId] || {})[pageId] : null;
  const customSections = submission?.customSections || [];

  // Step list — Intro + template sections + custom sections + Additional + Complete
  const steps = React.useMemo(() => {
    const arr = [{
      kind: "intro"
    }];
    sectionDefs.forEach((s, i) => arr.push({
      kind: "section",
      id: s.id,
      name: s.name,
      n: i + 1,
      total: sectionDefs.length,
      custom: false
    }));
    customSections.forEach((s, i) => arr.push({
      kind: "section",
      id: s.id,
      name: s.name,
      n: sectionDefs.length + i + 1,
      total: sectionDefs.length + customSections.length,
      custom: true
    }));
    arr.push({
      kind: "additional"
    });
    arr.push({
      kind: "complete"
    });
    return arr;
  }, [sectionDefs, customSections]);
  const [stepIdx, setStepIdx] = React.useState(0);
  const [savingState, setSavingState] = React.useState("saved");
  const saveTimer = React.useRef(null);

  // Resume from where they left off — try to find the first incomplete section
  React.useEffect(() => {
    const stored = parseInt(localStorage.getItem(`influex_step_${clientId}_${pageId}`) || "0", 10);
    if (stored > 0 && stored < steps.length) setStepIdx(stored);
  }, []);
  React.useEffect(() => {
    localStorage.setItem(`influex_step_${clientId}_${pageId}`, String(stepIdx));
  }, [stepIdx, clientId, pageId]);
  const pct = steps.length > 1 ? Math.round(stepIdx / (steps.length - 1) * 100) : 0;
  function pingSave() {
    setSavingState("saving");
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => setSavingState("saved"), 700);
  }
  function nextStep() {
    setStepIdx(i => Math.min(steps.length - 1, i + 1));
  }
  function prevStep() {
    setStepIdx(i => Math.max(0, i - 1));
  }
  React.useEffect(() => {
    function onKey(e) {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.isContentEditable) return;
      if (e.key === "ArrowRight" || e.key === "Enter") nextStep();
      if (e.key === "ArrowLeft") prevStep();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [steps.length]);
  const step = steps[stepIdx];
  if (!client || !page) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "canvas-stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "canvas-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand-mark"
  }), /*#__PURE__*/React.createElement("span", null, "INFLUEX\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)"
    }
  }, "/"), "\xA0Canvas")), /*#__PURE__*/React.createElement("div", {
    className: "crumbs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/dashboard",
    style: {
      color: "var(--cream-2)"
    }
  }, "\u2190 All pages"), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cream-1)"
    }
  }, page.name)), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: `save-state ${savingState === "saving" ? "saving" : ""}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "save-dot"
  }), savingState === "saving" ? "Saving…" : "All changes saved"), /*#__PURE__*/React.createElement("div", {
    className: "t-mono",
    style: {
      fontSize: 11,
      letterSpacing: "0.18em",
      color: "var(--gold-2)"
    }
  }, stepIdx + 1, " / ", steps.length)), /*#__PURE__*/React.createElement("div", {
    className: "canvas-progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "canvas-progress-fill",
    style: {
      width: `${pct}%`
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "canvas-body"
  }, /*#__PURE__*/React.createElement("div", {
    key: stepIdx,
    className: "canvas-step"
  }, step.kind === "intro" && /*#__PURE__*/React.createElement(IntroStep, {
    page: page,
    sectionDefs: sectionDefs,
    submission: submission,
    onStart: nextStep
  }), step.kind === "section" && /*#__PURE__*/React.createElement(SectionStep, {
    page: page,
    step: step,
    clientId: clientId,
    pingSave: pingSave
  }), step.kind === "additional" && /*#__PURE__*/React.createElement(AdditionalStep, {
    page: page,
    clientId: clientId,
    pingSave: pingSave,
    onAddSection: () => {
      const name = prompt("Name for the new section?");
      if (name) {
        store.addCustomSection(clientId, pageId, name);
        // Jump to the new section step
        setTimeout(() => setStepIdx(i => Math.max(0, steps.length - 2)), 50);
      }
    }
  }), step.kind === "complete" && /*#__PURE__*/React.createElement(CompleteStep, {
    page: page,
    clientId: clientId,
    submission: submission,
    pingSave: pingSave,
    onReview: () => setStepIdx(1)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "canvas-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: prevStep,
    disabled: stepIdx === 0,
    style: {
      opacity: stepIdx === 0 ? 0.3 : 1
    }
  }, "\u2190 Back"), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hint"
  }, "Press ", /*#__PURE__*/React.createElement("kbd", null, "Enter"), " or ", /*#__PURE__*/React.createElement("kbd", null, "\u2192"), " to continue"), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), stepIdx < steps.length - 1 ? /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-sm",
    onClick: nextStep
  }, "Save & continue \u2192") : /*#__PURE__*/React.createElement("a", {
    href: "#/dashboard",
    className: "btn btn-primary btn-sm"
  }, "Back to dashboard \u2192")));
}

// ───── INTRO ─────
function IntroStep({
  page,
  sectionDefs,
  submission,
  onStart
}) {
  const totalSections = sectionDefs.length + (submission?.customSections?.length || 0);
  const status = submission?.status || "not-started";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-eyebrow",
    style: {
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", null, page.navLevel), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, page.audience)), /*#__PURE__*/React.createElement("h1", {
    className: "step-title",
    style: {
      fontSize: 76,
      marginBottom: 18
    }
  }, page.name), /*#__PURE__*/React.createElement("p", {
    className: "step-purpose",
    style: {
      margin: "0 auto 40px",
      fontSize: 19
    }
  }, page.purpose), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 28,
      marginBottom: 48,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--gold-2)"
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--cream-1)"
    }
  }, totalSections), " sections"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)"
    }
  }, "/"), /*#__PURE__*/React.createElement("span", null, "~", Math.max(8, totalSections * 3), " min"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)"
    }
  }, "/"), /*#__PURE__*/React.createElement("span", null, "Autosaves as you type")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: onStart,
    style: {
      padding: "16px 32px",
      fontSize: 12
    }
  }, status === "not-started" ? "Begin canvas →" : "Resume canvas →"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 60,
      padding: "24px 28px",
      background: "var(--ink-2)",
      border: "1px solid var(--line-faint)",
      borderRadius: 14,
      textAlign: "left",
      maxWidth: 720,
      margin: "60px auto 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-eyebrow",
    style: {
      marginBottom: 14
    }
  }, "How this works"), /*#__PURE__*/React.createElement("ol", {
    style: {
      paddingLeft: 22,
      color: "var(--cream-2)",
      lineHeight: 1.7,
      margin: 0,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("li", null, "You'll move through each section of this page one at a time."), /*#__PURE__*/React.createElement("li", null, "For each section, give us headlines, copy, images and any notes."), /*#__PURE__*/React.createElement("li", null, "Skip a field if you're stuck \u2014 you can come back later."), /*#__PURE__*/React.createElement("li", null, "At the end, add any extra sections or free-form notes."), /*#__PURE__*/React.createElement("li", null, "Hit ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--cream-1)"
    }
  }, "Mark as complete"), " when this page is done."))));
}

// ───── SECTION STEP ─────
function SectionStep({
  page,
  step,
  clientId,
  pingSave
}) {
  const store = useStore();
  const sub = (store.state.submissions[clientId] || {})[page.id];
  const data = step.custom ? (sub?.customSections || []).find(x => x.id === step.id) || {} : (sub?.sections || {})[step.id] || {};
  function save(field, value) {
    store.saveField(clientId, page.id, step.id, field, value);
    pingSave();
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "step-eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, String(step.n).padStart(2, "0")), /*#__PURE__*/React.createElement("span", null, "Section ", step.n, " of ", step.total), step.custom && /*#__PURE__*/React.createElement("span", {
    className: "chip",
    style: {
      marginLeft: 8
    }
  }, "Custom")), /*#__PURE__*/React.createElement("h1", {
    className: "step-title"
  }, step.name), /*#__PURE__*/React.createElement("p", {
    className: "step-purpose"
  }, "Fill in what you have. Every field is optional \u2014 leave any blank and we'll write a draft for you."), /*#__PURE__*/React.createElement("div", {
    className: "step-fields"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Headline (Primary)",
    hint: "The big bold statement at the top of this section.",
    value: data.headline || "",
    onChange: v => save("headline", v),
    placeholder: "e.g. Ted Saunders"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Subheadline / Tagline",
    hint: "A supporting line that sits under the headline.",
    value: data.subheadline || "",
    onChange: v => save("subheadline", v),
    placeholder: "e.g. Director. Philosopher. Architect of Worlds."
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Body / Description",
    textarea: true,
    hint: "The paragraph(s) that tell the story. Or bullet points. Or alternative versions to choose from.",
    value: data.description || "",
    onChange: v => save("description", v),
    placeholder: "Write freely. We'll polish it later."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "CTA \u2014 Primary",
    hint: "Main button on this section.",
    value: data.ctaPrimary || "",
    onChange: v => save("ctaPrimary", v),
    placeholder: "e.g. Watch the Reel"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "CTA \u2014 Secondary",
    hint: "Optional second button.",
    value: data.ctaSecondary || "",
    onChange: v => save("ctaSecondary", v),
    placeholder: "e.g. Explore the Work"
  })), /*#__PURE__*/React.createElement(ImageDrop, {
    label: "Images",
    hint: "Drag-drop photography, mockups or references. Roughly under 3 MB each.",
    value: data.images || [],
    onChange: v => save("images", v)
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Notes for the designer",
    textarea: true,
    hint: "Icons, animation cues, references, the vibe \u2014 anything that doesn't fit in the boxes above.",
    value: data.notes || "",
    onChange: v => save("notes", v),
    placeholder: "e.g. Compass motif in transition. Reference vintage cameras + deep red lighting."
  }), step.custom && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-danger btn-sm",
    onClick: () => {
      if (confirm(`Delete the "${step.name}" section?`)) {
        store.deleteCustomSection(clientId, page.id, step.id);
        pingSave();
      }
    }
  }, "Delete this section"))));
}

// ───── ADDITIONAL CANVAS ─────
function AdditionalStep({
  page,
  clientId,
  pingSave,
  onAddSection
}) {
  const store = useStore();
  const sub = (store.state.submissions[clientId] || {})[page.id];
  const value = sub?.additional || "";
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "step-eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "+"), /*#__PURE__*/React.createElement("span", null, "Anything else?")), /*#__PURE__*/React.createElement("h1", {
    className: "step-title"
  }, "Add an ", /*#__PURE__*/React.createElement("em", null, "additional section"), /*#__PURE__*/React.createElement("br", null), "or just talk to us."), /*#__PURE__*/React.createElement("p", {
    className: "step-purpose"
  }, "If a section is missing from the structure above, spin one up now. Or use the free-form canvas below for anything that doesn't fit cleanly \u2014 notes, references, a stream of consciousness, lists, whatever. Use the toolbar for headings, bold, italics and bullets."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-sm",
    onClick: onAddSection
  }, "+ Add another section"), /*#__PURE__*/React.createElement("span", {
    className: "t-mono t-muted",
    style: {
      alignSelf: "center",
      fontSize: 11,
      letterSpacing: "0.18em"
    }
  }, "Creates a new section above with the same fields.")), /*#__PURE__*/React.createElement(RichTextEditor, {
    value: value,
    onChange: v => {
      store.saveField(clientId, page.id, "__additional", null, v);
      pingSave();
    },
    placeholder: "Type anything else you want us to know about this page\u2026"
  }));
}

// ───── COMPLETE STEP ─────
function CompleteStep({
  page,
  clientId,
  submission,
  pingSave,
  onReview
}) {
  const store = useStore();
  const isComplete = submission?.status === "complete";
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "step-eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, "Final step")), /*#__PURE__*/React.createElement("h1", {
    className: "step-title"
  }, "Ready to hand ", /*#__PURE__*/React.createElement("em", null, page.name), " over?"), /*#__PURE__*/React.createElement("p", {
    className: "step-purpose"
  }, "Once you mark this page complete, your project lead is notified and we begin design. You can still come back and edit anything \u2014 completion is a signal, not a lock."), /*#__PURE__*/React.createElement("div", {
    className: `complete-box ${isComplete ? "checked" : ""}`,
    onClick: () => {
      store.markComplete(clientId, page.id, !isComplete);
      pingSave();
    },
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, isComplete ? "✓" : ""), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label-main"
  }, "Mark \"", page.name, "\" as complete"), /*#__PURE__*/React.createElement("div", {
    className: "label-sub"
  }, isComplete ? "This page is marked complete. Click to uncheck." : "I've filled in what I have; Influex can take it from here."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: onReview
  }, "\u2190 Review my answers"), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement("a", {
    href: "#/dashboard",
    className: "btn btn-primary"
  }, "Back to all pages \u2192")));
}

// ───── FIELD ─────
function Field({
  label,
  hint,
  value,
  onChange,
  placeholder,
  textarea
}) {
  const [local, setLocal] = React.useState(value || "");
  React.useEffect(() => {
    setLocal(value || "");
  }, [value]);
  const timer = React.useRef(null);
  function onLocalChange(e) {
    const v = e.target.value;
    setLocal(v);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => onChange(v), 350);
  }
  function flushNow() {
    clearTimeout(timer.current);
    if (local !== value) onChange(local);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, label), hint && /*#__PURE__*/React.createElement("div", {
    className: "t-muted",
    style: {
      fontSize: 12,
      lineHeight: 1.5,
      marginTop: -2
    }
  }, hint), textarea ? /*#__PURE__*/React.createElement("textarea", {
    className: "textarea",
    value: local,
    onChange: onLocalChange,
    onBlur: flushNow,
    placeholder: placeholder,
    rows: 5
  }) : /*#__PURE__*/React.createElement("input", {
    className: "input",
    value: local,
    onChange: onLocalChange,
    onBlur: flushNow,
    placeholder: placeholder
  }));
}

// ───── IMAGE DROP ─────
function ImageDrop({
  label,
  hint,
  value,
  onChange
}) {
  const [over, setOver] = React.useState(false);
  const inputRef = React.useRef(null);
  async function handleFiles(files) {
    const arr = Array.from(files).filter(f => f.type.startsWith("image/"));
    const out = [];
    for (const f of arr) {
      if (f.size > 4 * 1024 * 1024) {
        alert(`"${f.name}" is over 4 MB — skipped.`);
        continue;
      }
      const data = await new Promise(res => {
        const r = new FileReader();
        r.onload = () => res(r.result);
        r.readAsDataURL(f);
      });
      out.push({
        name: f.name,
        size: f.size,
        type: f.type,
        data
      });
    }
    if (out.length) onChange([...(value || []), ...out]);
  }
  function onDrop(e) {
    e.preventDefault();
    setOver(false);
    if (e.dataTransfer.files) handleFiles(e.dataTransfer.files);
  }
  function onDragOver(e) {
    e.preventDefault();
    setOver(true);
  }
  function onDragLeave() {
    setOver(false);
  }
  function remove(i) {
    onChange((value || []).filter((_, idx) => idx !== i));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, label), hint && /*#__PURE__*/React.createElement("div", {
    className: "t-muted",
    style: {
      fontSize: 12,
      lineHeight: 1.5,
      marginTop: -2
    }
  }, hint), /*#__PURE__*/React.createElement("div", {
    className: `imgdrop ${over ? "over" : ""}`,
    onDrop: onDrop,
    onDragOver: onDragOver,
    onDragLeave: onDragLeave
  }, (value || []).length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "imgdrop-list"
  }, value.map((img, i) => /*#__PURE__*/React.createElement("div", {
    className: "imgdrop-item",
    key: i
  }, /*#__PURE__*/React.createElement("img", {
    src: img.data,
    alt: img.name
  }), /*#__PURE__*/React.createElement("div", {
    className: "del",
    onClick: () => remove(i)
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      maxWidth: 110
    }
  }, img.name), /*#__PURE__*/React.createElement("span", null, Math.round(img.size / 1024), "KB"))))), /*#__PURE__*/React.createElement("div", {
    className: "imgdrop-empty"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glyph"
  }, "\u2193"), /*#__PURE__*/React.createElement("div", null, "Drop images here or", " ", /*#__PURE__*/React.createElement("button", {
    className: "btn-ghost",
    style: {
      color: "var(--cream-3)",
      textDecoration: "underline",
      textUnderlineOffset: 3,
      fontFamily: "inherit",
      letterSpacing: 0,
      textTransform: "none",
      padding: 0,
      fontSize: "inherit"
    },
    onClick: () => inputRef.current?.click()
  }, "browse"), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "file",
    accept: "image/*",
    multiple: true,
    style: {
      display: "none"
    },
    onChange: e => handleFiles(e.target.files)
  })), /*#__PURE__*/React.createElement("div", {
    className: "t-fade",
    style: {
      fontSize: 11,
      fontFamily: "var(--font-mono)",
      letterSpacing: "0.14em",
      textTransform: "uppercase"
    }
  }, "JPG \xB7 PNG \xB7 WEBP \xB7 up to 4MB"))));
}

// ───── RICH TEXT EDITOR ─────
function RichTextEditor({
  value,
  onChange,
  placeholder
}) {
  const ref = React.useRef(null);
  const lastRef = React.useRef(value);
  React.useEffect(() => {
    if (ref.current && ref.current.innerHTML !== value) {
      ref.current.innerHTML = value || "";
      lastRef.current = value || "";
    }
  }, []);
  function exec(cmd, arg) {
    document.execCommand(cmd, false, arg);
    ref.current?.focus();
    handleInput();
  }
  function handleInput() {
    if (!ref.current) return;
    const html = ref.current.innerHTML;
    if (html !== lastRef.current) {
      lastRef.current = html;
      onChange(html);
    }
  }
  const tools = [{
    cmd: "formatBlock",
    arg: "H1",
    glyph: "H1",
    title: "Heading 1"
  }, {
    cmd: "formatBlock",
    arg: "H2",
    glyph: "H2",
    title: "Heading 2"
  }, {
    cmd: "formatBlock",
    arg: "P",
    glyph: "¶",
    title: "Paragraph"
  }, "sep", {
    cmd: "bold",
    glyph: /*#__PURE__*/React.createElement("b", null, "B"),
    title: "Bold"
  }, {
    cmd: "italic",
    glyph: /*#__PURE__*/React.createElement("i", null, "I"),
    title: "Italic"
  }, {
    cmd: "underline",
    glyph: /*#__PURE__*/React.createElement("span", {
      style: {
        textDecoration: "underline"
      }
    }, "U"),
    title: "Underline"
  }, "sep", {
    cmd: "insertUnorderedList",
    glyph: "•",
    title: "Bullets"
  }, {
    cmd: "insertOrderedList",
    glyph: "1.",
    title: "Numbered"
  }, "sep", {
    cmd: "createLink",
    glyph: "🔗",
    title: "Link",
    prompt: "URL?"
  }, {
    cmd: "removeFormat",
    glyph: "⌫",
    title: "Clear formatting"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rte-toolbar"
  }, tools.map((t, i) => t === "sep" ? /*#__PURE__*/React.createElement("span", {
    className: "rte-tool-sep",
    key: i
  }) : /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "rte-tool",
    title: t.title,
    onMouseDown: e => e.preventDefault(),
    onClick: () => {
      if (t.prompt) {
        const url = prompt(t.prompt);
        if (url) exec(t.cmd, url);
      } else exec(t.cmd, t.arg);
    }
  }, t.glyph))), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "rte-body",
    contentEditable: true,
    suppressContentEditableWarning: true,
    "data-placeholder": placeholder,
    onInput: handleInput,
    onBlur: handleInput
  }));
}
Object.assign(window, {
  Canvas
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "canvas.jsx", error: String((e && e.message) || e) }); }

// dashboard.jsx
try { (() => {
/* ─────────────────────────────────────────────────────────────────────
   DASHBOARD — Welcome + grouped sitemap checklist.
   ───────────────────────────────────────────────────────────────────── */

function Dashboard() {
  const store = useStore();
  const session = store.state.session;
  const client = session?.clientId ? store.state.clients[session.clientId] : null;

  // Redirect to login if session is gone — must run unconditionally to
  // keep hook order stable across renders.
  React.useEffect(() => {
    if (!client) window.location.hash = "#/login";
  }, [client]);
  const submissions = client ? store.state.submissions[client.id] || {} : {};
  const sitemap = store.state.template.sitemap || [];
  const grouped = React.useMemo(() => {
    const g = {
      Primary: [],
      Secondary: [],
      Utility: []
    };
    for (const p of sitemap) {
      if (!g[p.navLevel]) g[p.navLevel] = [];
      g[p.navLevel].push(p);
    }
    return g;
  }, [sitemap]);
  const stats = React.useMemo(() => {
    let complete = 0,
      inProgress = 0,
      notStarted = 0;
    for (const p of sitemap) {
      const s = submissions[p.id]?.status || "not-started";
      if (s === "complete") complete++;else if (s === "in-progress") inProgress++;else notStarted++;
    }
    const pct = sitemap.length ? Math.round(complete / sitemap.length * 100) : 0;
    return {
      complete,
      inProgress,
      notStarted,
      total: sitemap.length,
      pct
    };
  }, [sitemap, submissions]);
  if (!client) return null;
  function openPage(pageId) {
    window.location.hash = `#/canvas/${pageId}`;
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand-mark"
  }), /*#__PURE__*/React.createElement("span", null, "INFLUEX\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)"
    }
  }, "/"), "\xA0\xA0Copy Extraction")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-mono t-muted",
    style: {
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase"
    }
  }, client.projectName), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: () => {
      store.logout();
      window.location.hash = "#/login";
    }
  }, "Sign out"))), /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-eyebrow eyebrow"
  }, "Welcome, ", client.name.split(" ")[0]), /*#__PURE__*/React.createElement("h1", null, "Let's capture", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "your voice.")), /*#__PURE__*/React.createElement("p", null, "Below is the full sitemap for ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--cream-1)"
    }
  }, client.projectName), ". Each page has its own Copy Canvas \u2014 a guided walkthrough where you give us the headlines, words, images and notes for every section. Work at your pace. Everything saves automatically. Mark a page complete when you're ready and we'll take it from there."), /*#__PURE__*/React.createElement("div", {
    className: "dash-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-stat-n"
  }, stats.complete, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)",
      fontSize: 24
    }
  }, " / ", stats.total)), /*#__PURE__*/React.createElement("div", {
    className: "dash-stat-l"
  }, "Pages complete")), /*#__PURE__*/React.createElement("div", {
    className: "dash-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-stat-n"
  }, stats.inProgress), /*#__PURE__*/React.createElement("div", {
    className: "dash-stat-l"
  }, "In progress")), /*#__PURE__*/React.createElement("div", {
    className: "dash-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-stat-n"
  }, stats.notStarted), /*#__PURE__*/React.createElement("div", {
    className: "dash-stat-l"
  }, "Not started"))), /*#__PURE__*/React.createElement("div", {
    className: "dash-progress-track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-progress-fill",
    style: {
      width: `${stats.pct}%`
    }
  }))), Object.entries(grouped).map(([level, pages]) => pages.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "page-group",
    key: level
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-group-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, level), /*#__PURE__*/React.createElement("span", {
    className: "rule"
  }), /*#__PURE__*/React.createElement("span", {
    className: "count"
  }, pages.length, " page", pages.length !== 1 ? "s" : "")), /*#__PURE__*/React.createElement("div", null, pages.map(page => {
    const sub = submissions[page.id];
    const sectionDefs = store.state.template.sections[page.id] || [];
    const pct = pageProgress(sub, sectionDefs);
    const status = sub?.status || "not-started";
    const isSub = page.parentId != null;
    const idx = sitemap.indexOf(page) + 1;
    return /*#__PURE__*/React.createElement("div", {
      key: page.id,
      className: `page-row ${isSub ? "sub" : ""} ${status === "complete" ? "complete" : ""}`,
      onClick: () => openPage(page.id)
    }, /*#__PURE__*/React.createElement("div", {
      className: "index"
    }, String(idx).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
      className: "title"
    }, /*#__PURE__*/React.createElement("div", {
      className: "title-main"
    }, page.name), /*#__PURE__*/React.createElement("div", {
      className: "title-sub"
    }, page.purpose, " \xB7 ", /*#__PURE__*/React.createElement("span", {
      className: "t-fade"
    }, page.audience))), /*#__PURE__*/React.createElement("div", {
      className: "pct"
    }, pct, "%"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(StatusChip, {
      status: status
    }), /*#__PURE__*/React.createElement("span", {
      className: "arrow"
    }, "\u2192")));
  }))) : null), sitemap.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-eyebrow",
    style: {
      marginBottom: 12
    }
  }, "No pages yet"), /*#__PURE__*/React.createElement("div", {
    className: "t-muted"
  }, "Your Influex contact is still finalizing your sitemap. Check back shortly.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80,
      textAlign: "center",
      color: "var(--cream-2)",
      fontSize: 12,
      fontFamily: "var(--font-mono)",
      letterSpacing: "0.18em",
      textTransform: "uppercase"
    }
  }, "When all pages are marked complete, your project lead is automatically notified.")));
}
function StatusChip({
  status
}) {
  if (status === "complete") return /*#__PURE__*/React.createElement("span", {
    className: "chip chip-success"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip-dot"
  }), "Complete");
  if (status === "in-progress") return /*#__PURE__*/React.createElement("span", {
    className: "chip chip-progress"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip-dot"
  }), "In progress");
  return /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip-dot",
    style: {
      background: "var(--gold-deep)"
    }
  }), "Not started");
}
window.Dashboard = Dashboard;
window.StatusChip = StatusChip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "dashboard.jsx", error: String((e && e.message) || e) }); }

// login.jsx
try { (() => {
/* ─────────────────────────────────────────────────────────────────────
   LOGIN — Key code entry. Routes to admin or client dashboard.
   ───────────────────────────────────────────────────────────────────── */

function Login() {
  const store = useStore();
  const [key, setKey] = React.useState("");
  const [error, setError] = React.useState("");
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);
  function onSubmit(e) {
    e.preventDefault();
    const r = store.loginWithKey(key);
    if (!r.ok) {
      setError("Key not recognized. Check with your Influex contact.");
      setTimeout(() => setError(""), 3000);
    } else {
      if (r.kind === "admin") window.location.hash = "#/admin";else window.location.hash = "#/dashboard";
    }
  }

  // Uppercase + drop invalid chars, but PRESERVE the user's dashes —
  // we used to auto-reformat to strict XXXX-XXXX-XXXX, which mangled
  // any key whose original grouping didn't match (e.g. INFLUEX-ADMIN).
  // The store comparison strips dashes on both sides anyway.
  function onChange(e) {
    let v = e.target.value.toUpperCase().replace(/[^A-Z0-9-]/g, "");
    if (v.length > 24) v = v.slice(0, 24);
    setKey(v);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "login-stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "login-poster"
  }, /*#__PURE__*/React.createElement("div", {
    className: "login-poster-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-eyebrow",
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-1)"
    }
  }, "\u25C8"), "\xA0\xA0INFLUEX\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)"
    }
  }, "/"), "\xA0\xA0Copy Extraction"), /*#__PURE__*/React.createElement("h1", null, "Your voice,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "captured cleanly.")), /*#__PURE__*/React.createElement("p", null, "A guided canvas for handing us the words, images and design notes that become your new site. Section by section. Page by page. Saved as you go.")), /*#__PURE__*/React.createElement("div", {
    className: "login-poster-foot"
  }, /*#__PURE__*/React.createElement("span", null, "VIP Day Deliverable"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)"
    }
  }, "\u2014"), /*#__PURE__*/React.createElement("span", null, "Prepared by Influex"))), /*#__PURE__*/React.createElement("div", {
    className: "login-form"
  }, /*#__PURE__*/React.createElement("form", {
    className: "login-card",
    onSubmit: onSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-eyebrow",
    style: {
      marginBottom: 18
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontWeight: 200,
      fontSize: 40,
      letterSpacing: "-0.02em",
      margin: "0 0 12px",
      lineHeight: 1.05
    }
  }, "Enter your", /*#__PURE__*/React.createElement("br", null), "access key."), /*#__PURE__*/React.createElement("p", {
    className: "t-muted",
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      margin: "0 0 28px"
    }
  }, "We sent you a 12-character key. Type or paste it below."), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "Access Key"), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    className: "input login-key-input",
    placeholder: "XXXX-XXXX-XXXX",
    value: key,
    onChange: onChange,
    autoComplete: "off",
    spellCheck: false
  }), /*#__PURE__*/React.createElement("div", {
    className: "login-error"
  }, error)), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    style: {
      width: "100%",
      justifyContent: "center",
      marginTop: 8
    }
  }, "Enter \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      textAlign: "center",
      fontSize: 12,
      color: "var(--cream-2)",
      lineHeight: 1.8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-muted"
  }, "Don't have a key?"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:hello@influex.com",
    style: {
      color: "var(--cream-3)"
    }
  }, "Contact your project lead \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      paddingTop: 24,
      borderTop: "1px solid var(--line-faint)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-mono t-fade",
    style: {
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase"
    }
  }, "Admin? Use ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cream-3)"
    }
  }, "INFLUEX-ADMIN"))))));
}
window.Login = Login;
})(); } catch (e) { __ds_ns.__errors.push({ path: "login.jsx", error: String((e && e.message) || e) }); }

// state.jsx
try { (() => {
/* ─────────────────────────────────────────────────────────────────────
   STATE — localStorage-backed store, React context wrapper.
   ───────────────────────────────────────────────────────────────────── */
/* Data shape (v2):
     {
       template: {
         sitemap: [{id, name, parentId, navLevel, purpose, audience}],
         sections: { [pageId]: [{id, name}] }
       },
       clients: { [id]: { id, name, projectName, key, createdAt } },
       submissions: {
         [clientId]: {
           [pageId]: {
             status: 'not-started' | 'in-progress' | 'complete',
             sections: { [sectionId]: {headline, subheadline, description, ctaPrimary, ctaSecondary, images:[{name,size,data}], notes} },
             customSections: [{id, name, headline,...}],
             additional: '<html>',
             updatedAt
           }
         }
       },
       session: { clientId | admin: true } | null,
       adminKey: 'INFLUEX-ADMIN'
     }
*/

const STORAGE_KEY = "influex_copyextract_v2";

// ───── Universal Template ─────
// One sitemap, one section structure. Every client follows this.
const TEMPLATE_SITEMAP = [{
  id: "home",
  name: "Homepage",
  parentId: null,
  navLevel: "Primary",
  purpose: "Introduction, invitation, self-selection",
  audience: "All"
}, {
  id: "film",
  name: "Film",
  parentId: null,
  navLevel: "Primary",
  purpose: "Portfolio — commercial + festival + original IP",
  audience: "Clients + Investors"
}, {
  id: "origin",
  name: "Origin",
  parentId: null,
  navLevel: "Primary",
  purpose: "Story, credibility, connection",
  audience: "All"
}, {
  id: "philosophy",
  name: "Philosophy",
  parentId: null,
  navLevel: "Primary",
  purpose: "Book, thought leadership, worldview",
  audience: "Fans + Collaborators"
}, {
  id: "music",
  name: "Music",
  parentId: null,
  navLevel: "Primary",
  purpose: "Soundscapes, drops, audio world",
  audience: "Fans + Collaborators"
}, {
  id: "work",
  name: "Work With Teddy",
  parentId: null,
  navLevel: "Primary",
  purpose: "Hub page linking to all engagement paths",
  audience: "Clients + Investors"
}, {
  id: "commercial",
  name: "Commercial & Brand Work",
  parentId: "work",
  navLevel: "Secondary",
  purpose: "Hire Ted for commercial/brand filmmaking",
  audience: "Clients"
}, {
  id: "infinit",
  name: "Infinit Studios",
  parentId: "work",
  navLevel: "Secondary",
  purpose: "Brief description + link out to infinitstudios.com",
  audience: "Clients"
}, {
  id: "coaching",
  name: "Coaching / Consulting",
  parentId: "work",
  navLevel: "Secondary",
  purpose: "1:1 creative direction + filmmaker coaching",
  audience: "Creatives"
}, {
  id: "fated",
  name: "The Fated — Investor Page",
  parentId: "work",
  navLevel: "Secondary",
  purpose: "Film investment pitch for original sci-fi IP",
  audience: "Investors"
}, {
  id: "testimonials",
  name: "Testimonials",
  parentId: null,
  navLevel: "Secondary",
  purpose: "Social proof, credibility",
  audience: "All"
}, {
  id: "contact",
  name: "Contact",
  parentId: null,
  navLevel: "Primary",
  purpose: "General inquiries, booking",
  audience: "All"
}, {
  id: "p404",
  name: "404 Page",
  parentId: null,
  navLevel: "Utility",
  purpose: "Redirect lost visitors",
  audience: "All"
}, {
  id: "thankyou",
  name: "Thank You Page",
  parentId: null,
  navLevel: "Utility",
  purpose: "Post-form submission confirmation",
  audience: "All"
}, {
  id: "privacy",
  name: "Privacy Policy",
  parentId: null,
  navLevel: "Utility",
  purpose: "Legal — privacy",
  audience: "All"
}, {
  id: "terms",
  name: "Terms & Conditions",
  parentId: null,
  navLevel: "Utility",
  purpose: "Legal — terms",
  audience: "All"
}];
const TEMPLATE_SECTIONS = {
  home: [{
    id: "s1",
    name: "Hero"
  }, {
    id: "s2",
    name: "Self-Selection (Dual Path)"
  }, {
    id: "s3",
    name: "About Teaser"
  }, {
    id: "s4",
    name: "Work Showcase"
  }, {
    id: "s5",
    name: "Brand Promise / Manifesto"
  }],
  film: [{
    id: "s1",
    name: "Page Headline & Intro"
  }, {
    id: "s2",
    name: "Commercial & Brand"
  }, {
    id: "s3",
    name: "Festival & Impact Films"
  }, {
    id: "s4",
    name: "Original IP — The Fated"
  }],
  origin: [{
    id: "s1",
    name: "Page Headline"
  }, {
    id: "s2",
    name: "Chapter 1 — The Boy With The Camera"
  }, {
    id: "s3",
    name: "Chapter 2 — The Shadow Career"
  }, {
    id: "s4",
    name: "Chapter 3 — The Initiation"
  }, {
    id: "s5",
    name: "Chapter 4 — The Claiming"
  }],
  philosophy: [{
    id: "s1",
    name: "Page Headline & Intro"
  }, {
    id: "s2",
    name: "Pull Quote"
  }, {
    id: "s3",
    name: "Thought Leadership"
  }],
  music: [{
    id: "s1",
    name: "Page Headline & Intro"
  }, {
    id: "s2",
    name: "Archive / Releases"
  }],
  work: [{
    id: "s1",
    name: "Page Headline & Intro"
  }, {
    id: "s2",
    name: "Card 1 — Commercial & Brand"
  }, {
    id: "s3",
    name: "Card 2 — Infinit Studios"
  }, {
    id: "s4",
    name: "Card 3 — Coaching"
  }, {
    id: "s5",
    name: "Card 4 — The Fated"
  }],
  commercial: [{
    id: "s1",
    name: "Hero"
  }, {
    id: "s2",
    name: "Services"
  }, {
    id: "s3",
    name: "Case Studies"
  }],
  infinit: [{
    id: "s1",
    name: "Page Headline"
  }, {
    id: "s2",
    name: "Body Copy"
  }, {
    id: "s3",
    name: "External Link Block"
  }],
  coaching: [{
    id: "s1",
    name: "Page Headline"
  }, {
    id: "s2",
    name: "Body Copy"
  }, {
    id: "s3",
    name: "Compass — North (Career)"
  }, {
    id: "s4",
    name: "Compass — East (Health)"
  }, {
    id: "s5",
    name: "Compass — South (Relationships)"
  }, {
    id: "s6",
    name: "Compass — West (Finance)"
  }],
  fated: [{
    id: "s1",
    name: "Page Headline & Subhead"
  }, {
    id: "s2",
    name: "Logline"
  }, {
    id: "s3",
    name: "The World"
  }, {
    id: "s4",
    name: "The Vision"
  }, {
    id: "s5",
    name: "The Ask"
  }],
  testimonials: [{
    id: "s1",
    name: "Page Headline & Intro"
  }, {
    id: "s2",
    name: "Commercial Clients"
  }, {
    id: "s3",
    name: "Creative Collaborators"
  }],
  contact: [{
    id: "s1",
    name: "Page Headline & Intro"
  }, {
    id: "s2",
    name: "Form & Inquiry Paths"
  }, {
    id: "s3",
    name: "Contact Details"
  }],
  p404: [{
    id: "s1",
    name: "Headline & Body"
  }],
  thankyou: [{
    id: "s1",
    name: "Headline & Body"
  }],
  privacy: [{
    id: "s1",
    name: "Privacy Policy Content"
  }],
  terms: [{
    id: "s1",
    name: "Terms & Conditions Content"
  }]
};
const SEED = {
  template: {
    sitemap: TEMPLATE_SITEMAP,
    sections: TEMPLATE_SECTIONS
  },
  clients: {
    "ted-saunders": {
      id: "ted-saunders",
      name: "Ted Saunders",
      projectName: "tedsaunders.com",
      key: "TEDS-AUND-ERS1",
      createdAt: Date.now()
    }
  },
  submissions: {
    "ted-saunders": {
      // Pre-filled Homepage Hero so admin sees something interesting.
      home: {
        status: "in-progress",
        sections: {
          s1: {
            headline: "Ted Saunders",
            subheadline: "Director. Philosopher. Architect of Worlds.",
            description: "Alt taglines:\n• Wielding Magic Through Film, Philosophy & Futurism.\n• Don't try to impress. Just express.\n• The stories you feel before you understand them.",
            ctaPrimary: "Watch the Reel",
            ctaSecondary: "Explore the Work",
            images: [],
            notes: "Full-screen layered rotating visual world — curated montage cycling through all three brand motifs. Reference studio aesthetic: deep reds, dark slate, vintage cameras, bokeh depth. Compass motif in transition animations."
          }
        },
        customSections: [],
        additional: "",
        updatedAt: Date.now()
      }
    }
  },
  session: null,
  adminKey: "INFLUEX-ADMIN"
};
function loadState() {
  try {
    // Migrate from v1 if present.
    const v1 = localStorage.getItem("influex_copyextract_v1");
    if (v1 && !localStorage.getItem(STORAGE_KEY)) {
      localStorage.removeItem("influex_copyextract_v1");
    }
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED));
      return JSON.parse(JSON.stringify(SEED));
    }
    const parsed = JSON.parse(raw);
    // Belt-and-braces — if any required slot is missing, top it up.
    if (!parsed.template) parsed.template = JSON.parse(JSON.stringify(SEED.template));
    if (!parsed.clients) parsed.clients = {};
    if (!parsed.submissions) parsed.submissions = {};
    if (!parsed.adminKey) parsed.adminKey = SEED.adminKey;
    return parsed;
  } catch (e) {
    console.warn("State load failed, reseeding", e);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED));
    return JSON.parse(JSON.stringify(SEED));
  }
}
function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// Memorable client key — base on name + random suffix.
function genKey(name) {
  const base = (name || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8);
  const tail = Math.random().toString(36).slice(2, 6).toUpperCase();
  const seed = (base + "XXXXXXXX").slice(0, 8);
  return `${seed.slice(0, 4)}-${seed.slice(4, 8)}-${tail}`;
}
function uid(prefix = "") {
  return prefix + Math.random().toString(36).slice(2, 10);
}

// ───── Hook ─────
const StateContext = React.createContext(null);
function StateProvider({
  children
}) {
  const [state, setState] = React.useState(() => loadState());
  React.useEffect(() => {
    saveState(state);
  }, [state]);
  const update = React.useCallback(fn => {
    setState(prev => fn(JSON.parse(JSON.stringify(prev))));
  }, []);
  const actions = React.useMemo(() => ({
    // ───── session ─────
    loginWithKey(key) {
      const norm = k => (k || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
      const entered = norm(key);
      if (!entered) return {
        ok: false
      };
      if (entered === norm(state.adminKey)) {
        update(s => {
          s.session = {
            admin: true
          };
          return s;
        });
        return {
          ok: true,
          kind: "admin"
        };
      }
      const client = Object.values(state.clients).find(c => norm(c.key) === entered);
      if (client) {
        update(s => {
          s.session = {
            clientId: client.id
          };
          return s;
        });
        return {
          ok: true,
          kind: "client",
          clientId: client.id
        };
      }
      return {
        ok: false
      };
    },
    logout() {
      update(s => {
        s.session = null;
        return s;
      });
    },
    // ───── clients ─────
    createClient({
      name,
      projectName
    }) {
      const id = uid("c");
      const key = genKey(name);
      update(s => {
        s.clients[id] = {
          id,
          name,
          projectName,
          key,
          createdAt: Date.now()
        };
        s.submissions[id] = s.submissions[id] || {};
        return s;
      });
      return id;
    },
    deleteClient(id) {
      update(s => {
        delete s.clients[id];
        delete s.submissions[id];
        return s;
      });
    },
    regenKey(id) {
      update(s => {
        s.clients[id].key = genKey(s.clients[id].name);
        return s;
      });
    },
    updateClient(id, patch) {
      update(s => {
        s.clients[id] = {
          ...s.clients[id],
          ...patch
        };
        return s;
      });
    },
    // ───── template (sitemap) ─────
    addTemplatePage(page) {
      update(s => {
        const id = page.id || uid("p");
        s.template.sitemap.push({
          id,
          parentId: null,
          navLevel: "Primary",
          purpose: "",
          audience: "All",
          ...page
        });
        if (!s.template.sections[id]) {
          s.template.sections[id] = [{
            id: "s1",
            name: "Hero"
          }, {
            id: "s2",
            name: "Section 2"
          }];
        }
        return s;
      });
    },
    updateTemplatePage(pageId, patch) {
      update(s => {
        const i = s.template.sitemap.findIndex(p => p.id === pageId);
        if (i >= 0) s.template.sitemap[i] = {
          ...s.template.sitemap[i],
          ...patch
        };
        return s;
      });
    },
    deleteTemplatePage(pageId) {
      update(s => {
        s.template.sitemap = s.template.sitemap.filter(p => p.id !== pageId).map(p => p.parentId === pageId ? {
          ...p,
          parentId: null
        } : p);
        delete s.template.sections[pageId];
        // Drop submissions for this page from all clients
        for (const cid of Object.keys(s.submissions)) {
          if (s.submissions[cid]) delete s.submissions[cid][pageId];
        }
        return s;
      });
    },
    moveTemplatePage(pageId, dir) {
      update(s => {
        const arr = s.template.sitemap;
        const i = arr.findIndex(p => p.id === pageId);
        const j = i + dir;
        if (i < 0 || j < 0 || j >= arr.length) return s;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        return s;
      });
    },
    // ───── template sections ─────
    addTemplateSection(pageId, name) {
      update(s => {
        s.template.sections[pageId] = s.template.sections[pageId] || [];
        s.template.sections[pageId].push({
          id: uid("s"),
          name: name || "New Section"
        });
        return s;
      });
    },
    updateTemplateSection(pageId, sectionId, patch) {
      update(s => {
        const arr = s.template.sections[pageId] || [];
        const i = arr.findIndex(x => x.id === sectionId);
        if (i >= 0) arr[i] = {
          ...arr[i],
          ...patch
        };
        return s;
      });
    },
    deleteTemplateSection(pageId, sectionId) {
      update(s => {
        s.template.sections[pageId] = (s.template.sections[pageId] || []).filter(x => x.id !== sectionId);
        return s;
      });
    },
    moveTemplateSection(pageId, sectionId, dir) {
      update(s => {
        const arr = s.template.sections[pageId] || [];
        const i = arr.findIndex(x => x.id === sectionId);
        const j = i + dir;
        if (i < 0 || j < 0 || j >= arr.length) return s;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        return s;
      });
    },
    // ───── submissions ─────
    saveField(clientId, pageId, sectionId, field, value) {
      update(s => {
        s.submissions[clientId] = s.submissions[clientId] || {};
        s.submissions[clientId][pageId] = s.submissions[clientId][pageId] || {
          status: "not-started",
          sections: {},
          customSections: [],
          additional: "",
          updatedAt: Date.now()
        };
        const sub = s.submissions[clientId][pageId];
        if (sectionId === "__additional") {
          sub.additional = value;
        } else if (typeof sectionId === "string" && sectionId.startsWith("custom-")) {
          const idx = sub.customSections.findIndex(x => x.id === sectionId);
          if (idx >= 0) sub.customSections[idx] = {
            ...sub.customSections[idx],
            [field]: value
          };
        } else {
          sub.sections[sectionId] = sub.sections[sectionId] || {};
          sub.sections[sectionId][field] = value;
        }
        sub.updatedAt = Date.now();
        if (sub.status === "not-started") sub.status = "in-progress";
        return s;
      });
    },
    addCustomSection(clientId, pageId, name) {
      update(s => {
        s.submissions[clientId] = s.submissions[clientId] || {};
        s.submissions[clientId][pageId] = s.submissions[clientId][pageId] || {
          status: "not-started",
          sections: {},
          customSections: [],
          additional: "",
          updatedAt: Date.now()
        };
        s.submissions[clientId][pageId].customSections.push({
          id: "custom-" + uid(),
          name: name || "Custom Section"
        });
        return s;
      });
    },
    deleteCustomSection(clientId, pageId, sectionId) {
      update(s => {
        const sub = s.submissions[clientId]?.[pageId];
        if (!sub) return s;
        sub.customSections = sub.customSections.filter(x => x.id !== sectionId);
        return s;
      });
    },
    markComplete(clientId, pageId, complete) {
      update(s => {
        s.submissions[clientId] = s.submissions[clientId] || {};
        s.submissions[clientId][pageId] = s.submissions[clientId][pageId] || {
          status: "not-started",
          sections: {},
          customSections: [],
          additional: "",
          updatedAt: Date.now()
        };
        s.submissions[clientId][pageId].status = complete ? "complete" : "in-progress";
        s.submissions[clientId][pageId].updatedAt = Date.now();
        return s;
      });
    },
    // ───── reset ─────
    factoryReset() {
      localStorage.removeItem(STORAGE_KEY);
      setState(loadState());
    }
  }), [state, update]);
  const value = React.useMemo(() => ({
    state,
    ...actions
  }), [state, actions]);
  return React.createElement(StateContext.Provider, {
    value
  }, children);
}
function useStore() {
  const v = React.useContext(StateContext);
  if (!v) throw new Error("StateProvider missing");
  return v;
}

// Helpers exposed globally
function pageProgress(submission, sectionDefs) {
  if (!submission) return 0;
  const all = (sectionDefs || []).map(s => s.id).concat((submission.customSections || []).map(s => s.id));
  if (all.length === 0) return submission.additional ? 100 : 0;
  let filled = 0;
  for (const id of all) {
    const data = id.startsWith("custom-") ? submission.customSections.find(x => x.id === id) || {} : (submission.sections || {})[id] || {};
    if (data.headline || data.description || data.subheadline || data.notes || data.images && data.images.length) filled++;
  }
  let pct = filled / all.length * 100;
  if (submission.additional && submission.additional.replace(/<[^>]+>/g, "").trim().length > 0) {
    pct = Math.min(100, pct + 100 / (all.length + 1));
  }
  return Math.round(pct);
}
Object.assign(window, {
  StateProvider,
  useStore,
  pageProgress,
  uid,
  genKey
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "state.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BookingSection.jsx
try { (() => {
// BookingSection.jsx — final CTA
const BookingSection = () => {
  const [first, setFirst] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    setSent(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "ix-booking"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ix-eyebrow ix-eyebrow-accent"
  }, "READY TO GET YOUR"), /*#__PURE__*/React.createElement("h2", {
    className: "ix-booking-h2"
  }, "Ready to ", /*#__PURE__*/React.createElement("span", {
    className: "ix-grad-text"
  }, "Amplify Your Impact"), /*#__PURE__*/React.createElement("br", null), "by Expressing Your ", /*#__PURE__*/React.createElement("i", null, "Essence"), "?"), /*#__PURE__*/React.createElement("form", {
    className: "ix-booking-form",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "ix-booking-field"
  }, /*#__PURE__*/React.createElement("label", null, "FIRST NAME*"), /*#__PURE__*/React.createElement("input", {
    value: first,
    onChange: e => setFirst(e.target.value),
    placeholder: "Your name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ix-booking-field"
  }, /*#__PURE__*/React.createElement("label", null, "EMAIL*"), /*#__PURE__*/React.createElement("input", {
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@domain.com"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "ix-cta-pill ix-cta-pill-filled"
  }, sent ? 'SENT ✓' : 'BOOK YOUR CALL')), /*#__PURE__*/React.createElement("div", {
    className: "ix-booking-sub"
  }, "We\u2019ll also send our top tools straight to your inbox."));
};
window.BookingSection = BookingSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BookingSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EssenceSection.jsx
try { (() => {
// EssenceSection.jsx — the "= INFLUENCE + EXPRESSION" statement
const EssenceSection = () => /*#__PURE__*/React.createElement("section", {
  className: "ix-essence"
}, /*#__PURE__*/React.createElement("div", {
  className: "ix-essence-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "ix-eyebrow ix-eyebrow-accent"
}, "OUR PURPOSE"), /*#__PURE__*/React.createElement("p", {
  className: "ix-essence-lede"
}, "Because we believe that your greatest ", /*#__PURE__*/React.createElement("b", null, "INFLUENCE"), ", ", /*#__PURE__*/React.createElement("b", null, "IMPACT"), " & ", /*#__PURE__*/React.createElement("b", null, "INCOME"), " comes through your ", /*#__PURE__*/React.createElement("b", null, "FULLEST EXPRESSION"), "."), /*#__PURE__*/React.createElement("div", {
  className: "ix-essence-pillar-row"
}, /*#__PURE__*/React.createElement("div", {
  className: "ix-pillar"
}, /*#__PURE__*/React.createElement("span", {
  className: "ix-pillar-num"
}, "01"), /*#__PURE__*/React.createElement("span", {
  className: "ix-pillar-label"
}, "ESSENCE")), /*#__PURE__*/React.createElement("div", {
  className: "ix-pillar"
}, /*#__PURE__*/React.createElement("span", {
  className: "ix-pillar-num"
}, "02"), /*#__PURE__*/React.createElement("span", {
  className: "ix-pillar-label"
}, "EXPRESSION")), /*#__PURE__*/React.createElement("div", {
  className: "ix-pillar"
}, /*#__PURE__*/React.createElement("span", {
  className: "ix-pillar-num"
}, "03"), /*#__PURE__*/React.createElement("span", {
  className: "ix-pillar-label"
}, "AUTHORITY")))));
window.EssenceSection = EssenceSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EssenceSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FeaturedIn.jsx
try { (() => {
// FeaturedIn.jsx — Inc. 5000 / Entrepreneur / Forbes strip
const FeaturedIn = () => /*#__PURE__*/React.createElement("section", {
  className: "ix-featured"
}, /*#__PURE__*/React.createElement("div", {
  className: "ix-eyebrow ix-eyebrow-center ix-eyebrow-muted"
}, "AS FEATURED IN"), /*#__PURE__*/React.createElement("div", {
  className: "ix-featured-row"
}, /*#__PURE__*/React.createElement("span", {
  className: "ix-press ix-press-inc"
}, /*#__PURE__*/React.createElement("b", null, "Inc."), /*#__PURE__*/React.createElement("span", {
  className: "ix-press-big"
}, "5000"), /*#__PURE__*/React.createElement("span", {
  className: "ix-press-sub"
}, "No. 2354")), /*#__PURE__*/React.createElement("span", {
  className: "ix-press ix-press-serif"
}, "Entrepreneur"), /*#__PURE__*/React.createElement("span", {
  className: "ix-press ix-press-forbes"
}, "Forbes")));
window.FeaturedIn = FeaturedIn;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FeaturedIn.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Footer.jsx
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  className: "ix-footer"
}, /*#__PURE__*/React.createElement("div", {
  className: "ix-footer-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "ix-footer-brand"
}, /*#__PURE__*/React.createElement("span", {
  className: "ix-brand-gold"
}, "INFLUE"), /*#__PURE__*/React.createElement("span", {
  className: "ix-brand-x"
}, "X")), /*#__PURE__*/React.createElement("div", {
  className: "ix-footer-tagline"
}, "BEHIND BADASS BRANDS:"), /*#__PURE__*/React.createElement("div", {
  className: "ix-footer-links"
}, /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "About"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Portfolio"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Process"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Press"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Insights")), /*#__PURE__*/React.createElement("div", {
  className: "ix-footer-meta"
}, "Copyright Influex \xA0 | \xA0 Terms of Use \xA0 | \xA0 Privacy Policy \xA0 | \xA0 Refund Policy")));
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Hero.jsx — signature headline with gradient accent
const Hero = () => /*#__PURE__*/React.createElement("section", {
  className: "ix-hero"
}, /*#__PURE__*/React.createElement("div", {
  className: "ix-hero-bloom-1"
}), /*#__PURE__*/React.createElement("div", {
  className: "ix-hero-bloom-2"
}), /*#__PURE__*/React.createElement("div", {
  className: "ix-hero-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "ix-eyebrow ix-eyebrow-center"
}, "INFLUENCE \xA0+\xA0 EXPRESSION"), /*#__PURE__*/React.createElement("h1", {
  className: "ix-hero-h1"
}, /*#__PURE__*/React.createElement("span", null, "WE DESIGN ", /*#__PURE__*/React.createElement("b", null, "ICONIC BRANDS")), /*#__PURE__*/React.createElement("span", null, "& ", /*#__PURE__*/React.createElement("b", null, "WORLD-CLASS WEBSITES")), /*#__PURE__*/React.createElement("span", {
  className: "ix-hero-sub"
}, "THAT EXPRESS YOUR ", /*#__PURE__*/React.createElement("i", null, "Essence"), " & AMPLIFY YOUR AUTHORITY")), /*#__PURE__*/React.createElement("div", {
  className: "ix-hero-cta"
}, /*#__PURE__*/React.createElement("a", {
  className: "ix-cta-pill",
  href: "#"
}, "BOOK YOUR CALL"), /*#__PURE__*/React.createElement("a", {
  className: "ix-link",
  href: "#"
}, "View Portfolio \u2192"))));
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
// Nav.jsx — Influex marketing site top nav
const Nav = () => /*#__PURE__*/React.createElement("nav", {
  className: "ix-nav"
}, /*#__PURE__*/React.createElement("a", {
  className: "ix-brand",
  href: "#"
}, /*#__PURE__*/React.createElement("span", {
  className: "ix-brand-gold"
}, "INFLUE"), /*#__PURE__*/React.createElement("span", {
  className: "ix-brand-x"
}, "X")), /*#__PURE__*/React.createElement("div", {
  className: "ix-nav-links"
}, ['ABOUT', 'PORTFOLIO', 'PROCESS', 'PRESS', 'INSIGHTS', 'STORY COURSE'].map(l => /*#__PURE__*/React.createElement("a", {
  key: l,
  href: "#",
  className: "ix-nav-link"
}, l))), /*#__PURE__*/React.createElement("a", {
  className: "ix-cta-pill",
  href: "#"
}, "BOOK YOUR CALL"));
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProofSection.jsx
try { (() => {
// ProofSection.jsx — spotlight cards (portfolio preview)
const spotlights = [{
  eyebrow: 'SPOTLIGHT · LAUNCH',
  title: 'JIM KWIK',
  url: 'JIMKWIK.COM',
  body: 'Full brand redesign and world-class site for the world\u2019s foremost authority on memory, speed reading and brain optimization.'
}, {
  eyebrow: 'SPOTLIGHT · LEGACY',
  title: 'JOE POLISH',
  url: 'JOEPOLISH.COM',
  body: 'Reimagined digital presence for the Genius Network founder \u2014 built to match a thirty-year legacy of entrepreneurial impact.'
}, {
  eyebrow: 'SPOTLIGHT · MASTERMIND',
  title: 'RISE NATION',
  url: 'RISENATION.COM',
  body: 'Movement-grade mastermind brand for the fitness category \u2014 obsidian precision, ceremonial typography.'
}];
const ProofSection = () => /*#__PURE__*/React.createElement("section", {
  className: "ix-proof"
}, /*#__PURE__*/React.createElement("div", {
  className: "ix-section-header"
}, /*#__PURE__*/React.createElement("div", {
  className: "ix-eyebrow ix-eyebrow-accent"
}, "LEVERAGE. LEADERSHIP. LEGACY."), /*#__PURE__*/React.createElement("h2", {
  className: "ix-section-h2"
}, "Serving industry ", /*#__PURE__*/React.createElement("span", {
  className: "ix-grad-text"
}, "icons & innovators"), ".")), /*#__PURE__*/React.createElement("div", {
  className: "ix-spotlight-grid"
}, spotlights.map(s => /*#__PURE__*/React.createElement("article", {
  key: s.title,
  className: "ix-spotlight"
}, /*#__PURE__*/React.createElement("div", {
  className: "ix-spotlight-img"
}, /*#__PURE__*/React.createElement("div", {
  className: "ix-spotlight-img-bloom"
}), /*#__PURE__*/React.createElement("div", {
  className: "ix-spotlight-mono"
}, s.title.slice(0, 2))), /*#__PURE__*/React.createElement("div", {
  className: "ix-spotlight-body"
}, /*#__PURE__*/React.createElement("div", {
  className: "ix-eyebrow ix-eyebrow-accent"
}, s.eyebrow), /*#__PURE__*/React.createElement("h3", {
  className: "ix-spotlight-title"
}, s.title), /*#__PURE__*/React.createElement("div", {
  className: "ix-spotlight-url"
}, s.url), /*#__PURE__*/React.createElement("div", {
  className: "ix-ceremonial-rule"
}), /*#__PURE__*/React.createElement("p", {
  className: "ix-spotlight-copy"
}, s.body), /*#__PURE__*/React.createElement("a", {
  className: "ix-link",
  href: "#"
}, "View website \u2192"))))));
window.ProofSection = ProofSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProofSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TrustedBy.jsx
try { (() => {
// TrustedBy.jsx — the marquee client rail
const clients = [{
  name: 'MATTHEW HUSSEY',
  mono: 'MH'
}, {
  name: 'DR. POMPA',
  mono: 'DP'
}, {
  name: 'TOP DOG LAW',
  mono: 'TDL'
}, {
  name: 'JIM KWIK',
  mono: 'JK'
}, {
  name: 'ELISABETH DAWSON',
  mono: 'ED'
}, {
  name: 'ADOUTREACH',
  mono: 'AO'
}, {
  name: 'RISE NATION',
  mono: 'RN'
}, {
  name: 'GENIUS NETWORK',
  mono: 'GN'
}];
const TrustedBy = () => /*#__PURE__*/React.createElement("section", {
  className: "ix-trustedby"
}, /*#__PURE__*/React.createElement("div", {
  className: "ix-eyebrow ix-eyebrow-center"
}, "TRUSTED BY 200+ INDUSTRY INFLUENCERS & ICONS"), /*#__PURE__*/React.createElement("div", {
  className: "ix-trustedby-tags"
}, ['SOULFUL CELEBRITIES', 'INTERNET INFLUENCERS', 'PASSIONATE PROFESSIONALS', 'LEADING LAW FIRMS', 'EXPRESSED EXECUTIVES'].map((t, i, a) => /*#__PURE__*/React.createElement(React.Fragment, {
  key: t
}, /*#__PURE__*/React.createElement("span", {
  className: "ix-trustedby-tag"
}, t), i < a.length - 1 && /*#__PURE__*/React.createElement("span", {
  className: "ix-trustedby-sep"
}, "|")))), /*#__PURE__*/React.createElement("div", {
  className: "ix-trustedby-row"
}, clients.map(c => /*#__PURE__*/React.createElement("div", {
  key: c.name,
  className: "ix-client"
}, /*#__PURE__*/React.createElement("div", {
  className: "ix-client-mono"
}, c.mono), /*#__PURE__*/React.createElement("div", {
  className: "ix-client-name"
}, c.name)))), /*#__PURE__*/React.createElement("div", {
  className: "ix-trustedby-disclaimer"
}, "Client marks are text placeholders \u2014 source from each client\u2019s press kit for production."));
window.TrustedBy = TrustedBy;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TrustedBy.jsx", error: String((e && e.message) || e) }); }

})();
