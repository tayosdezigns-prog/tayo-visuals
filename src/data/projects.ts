import { Project } from '../types/portfolio';

// Local generated assets
import heroReelImg from '../assets/images/hero_cinematic_reel_1790417995224.jpg';
import noireImg from '../assets/images/noire_perfume_campaign_1790418011423.jpg';
import vantaImg from '../assets/images/vanta_automotive_night_1790418022717.jpg';
import aurelImg from '../assets/images/aurel_chronograph_macro_1790418033383.jpg';
import afterlightImg from '../assets/images/afterlight_cinema_dusk_1790418045362.jpg';
import formaImg from '../assets/images/forma_acoustic_minimal_1790418055207.jpg';
import originImg from '../assets/images/origin_motion_sportswear_1790418070017.jpg';
import elanImg from '../assets/images/elan_beauty_skincare_1790418081341.jpg';
import syntheticImg from '../assets/images/synthetic_reality_art_1790418094002.jpg';
import objectImg from '../assets/images/object01_industrial_design_1790418106332.jpg';
import socialImg from '../assets/images/social01_vertical_hook_1790418117696.jpg';

export const HERO_ASSET = heroReelImg;

export const PROJECTS: Project[] = [
  {
    id: 'noire',
    slug: 'noire-scent-of-midnight',
    title: 'NOIRÉ',
    tagline: 'THE SCENT OF MIDNIGHT',
    category: 'PRODUCT ADS',
    categoryLabel: 'Luxury Fragrance / Product Commercial',
    year: '2026',
    type: 'Luxury Commercial Film',
    client: 'Self-Initiated Concept',
    label: 'SPECULATIVE CAMPAIGN',
    role: 'AI Creative Director · Prompt Engineer · Cinematic Colorist',
    duration: '0:45',
    aspect: '16:9',
    heroImage: noireImg,
    featured: true,
    concept: 'A cinematic luxury fragrance film centered around a sculptural black perfume bottle. Emerging from pure shadow into controlled chiaroscuro rim lighting with tactile fluid and smoke interactions.',
    artDirection: 'High-contrast European luxury fashion film aesthetics. Obsidian glass reflections, deep graphite shadows, warm 2700K amber controlled edge highlights, and slow volumetric camera tracks.',
    commercialObjective: 'Position NOIRÉ as an avant-garde evening fragrance competing against Tom Ford Private Blend and Kilian, emphasizing enigmatic presence and sculptural physical craftsmanship.',
    tools: ['Midjourney v6.1', 'Runway Gen-3 Alpha', 'DaVinci Resolve Studio 19', 'Luma Dream Machine', 'Topaz Video AI 5'],
    colorGrading: 'Custom Kodak 2383 D65 print film emulation with crushed midtones and warm amber highlight roll-off.',
    soundDesignNotes: 'Sub-bass atmospheric drone layered with resonant crystal strikes, crisp liquid droplet splashes, and intimate whisper textures.',
    keyVisualAttributes: ['Black glass reflections', 'Amber micro-lighting', 'Volumetric vapor curl', 'Macro bevel detailing'],
    sequenceShots: [
      {
        timecode: '00:00 — 00:08',
        shotName: 'The Void Awakening',
        cameraMovement: 'Slow push-in on pitch black field with razor-thin horizontal flare revealing glass silhouette.',
        promptGuidance: 'Sculptural black obsidian bottle emerging from pure darkness, rim light only, anamorphic 35mm lens.',
        lightingAndAtmosphere: 'Single top rim light at 15% intensity, deep atmospheric mist.'
      },
      {
        timecode: '00:09 — 00:22',
        shotName: 'Liquid & Smoke Alchemy',
        cameraMovement: 'Macro orbital pan around the flacon shoulder as iridescent amber smoke curls against obsidian glass.',
        promptGuidance: 'Extreme macro shot of amber fluid meniscus sliding down polished jet-black glass surface, 120fps slow motion.',
        lightingAndAtmosphere: 'Chiaroscuro side key light with soft gold bounce fill.'
      },
      {
        timecode: '00:23 — 00:35',
        shotName: 'Architectural Monolith',
        cameraMovement: 'Low-angle pedestal rise revealing the heavy brushed metal cap and engraved NOIRÉ typographic emblem.',
        promptGuidance: 'Brutalist perspective of luxury perfume flacon resting on wet slate plinth, water ripples reflecting golden light.',
        lightingAndAtmosphere: 'Dual strip lights at 45-degree angles, crisp specular highlights.'
      },
      {
        timecode: '00:36 — 00:45',
        shotName: 'The Hero Resolve',
        cameraMovement: 'Centering pull-back with typography dissolve: NOIRÉ — THE SCENT OF MIDNIGHT.',
        promptGuidance: 'Static hero product shot, clean symmetrical composition, warm golden back-glow diffusing through smoke.',
        lightingAndAtmosphere: 'Controlled backlight halo with soft front ambient fill.'
      }
    ]
  },
  {
    id: 'vanta',
    slug: 'vanta-future-moves-quietly',
    title: 'VANTA',
    tagline: 'THE FUTURE MOVES QUIETLY',
    category: 'AI COMMERCIAL',
    categoryLabel: 'Automotive / AI Commercial',
    year: '2026',
    type: 'Automotive Campaign Film',
    client: 'Self-Initiated Concept',
    label: 'SPECULATIVE CAMPAIGN',
    role: 'AI Automotive Director · Synthetic Environment Artist · Sound Designer',
    duration: '1:10',
    aspect: '16:9',
    heroImage: vantaImg,
    featured: true,
    concept: 'A silent nocturnal journey through brutalist concrete cityscapes. The VANTA luxury electric hypercar glides through rain-slicked avenues, defined only by razor LED light bars and wet road reflections.',
    artDirection: 'Atmospheric noir cinematography inspired by modern architecture. Matte-black carbon panels, wet asphalt specular tracks, architectural glass towers, cold cyan street tones counterbalanced by warm interior cockpit glow.',
    commercialObjective: 'Establish the quiet power of high-end electric mobility, shifting automotive narrative away from raw combustion aggression toward architectural serenity.',
    tools: ['Runway Gen-3 Alpha', 'Kling AI 1.5', 'Midjourney v6.1', 'After Effects', 'DaVinci Resolve Studio 19'],
    colorGrading: 'Cool cyan-blue shadows (#0b1726) with neutral monochrome body tones and laser-sharp LED white balance.',
    soundDesignNotes: 'Bespoke electric drivetrain turbine whistle, binaural rain sounds on carbon fiber, and low frequency sub-pulses.',
    keyVisualAttributes: ['Wet asphalt reflections', 'Geometric matrix headlights', 'Brutalist concrete architecture', 'Aerodynamic aero-wake'],
    sequenceShots: [
      {
        timecode: '00:00 — 00:15',
        shotName: 'Nocturnal Ignition',
        cameraMovement: 'Macro tracking shot across the vehicle rear light blade animating into life across wet carbon fiber.',
        promptGuidance: 'Extreme close up of aerodynamic diffuser on matte black supercar, water droplets vibrating, LED activation sequence.',
        lightingAndAtmosphere: 'Rain mist, ambient sodium streetlights refracted through downpour.'
      },
      {
        timecode: '00:16 — 00:38',
        shotName: 'Silent Glide Through Rain',
        cameraMovement: 'Russian arm camera tracking parallel to the car at 80 km/h, rain droplets streaking across the lens.',
        promptGuidance: 'Sleek luxury electric coupe slicing through wet rain-drenched urban canyon, architectural reflections gliding across glass.',
        lightingAndAtmosphere: 'Cold neon reflections on wet asphalt, volumetric tunnel lighting.'
      },
      {
        timecode: '00:39 — 00:55',
        shotName: 'Minimalist Interior Cockpit',
        cameraMovement: 'Steadicam push through frameless window into the sculpted cashmere and smoked glass interior cockpit.',
        promptGuidance: 'High-end minimalist automotive interior, curved OLED heads-up display, subtle warm ambient footwell illumination.',
        lightingAndAtmosphere: 'Soft interior ambient glow contrasted against passing city lights.'
      },
      {
        timecode: '00:56 — 01:10',
        shotName: 'The Horizon Exit',
        cameraMovement: 'High-angle drone crane shot pulling up as the vehicle accelerates silently into a misty suspension bridge.',
        promptGuidance: 'Long telephoto cinematic shot of electric hypercar vanishing into foggy bridge lights, red tail light trails.',
        lightingAndAtmosphere: 'Atmospheric fog, distant warm tungsten city glow.'
      }
    ]
  },
  {
    id: 'afterlight',
    slug: 'afterlight-urban-elegy',
    title: 'AFTERLIGHT',
    tagline: 'AN URBAN ELEGY',
    category: 'BRAND FILM',
    categoryLabel: 'Brand Film / Cinematic Storytelling',
    year: '2026',
    type: 'Narrative Lifestyle Film',
    client: 'Self-Initiated Concept',
    label: 'CONCEPT PROJECT',
    role: 'Cinematic Storyteller · AI Scene Director · Editor',
    duration: '1:30',
    aspect: '16:9',
    heroImage: afterlightImg,
    featured: true,
    concept: 'An emotional cinematic journey of a solitary protagonist moving through a coastal metropolis at the transition from golden hour into blue twilight, capturing human presence amidst monumental modern structures.',
    artDirection: '35mm anamorphic film simulation with authentic halation, organic grain, golden sunlight bouncing off curtain-wall glass, and poetic visual rhythm.',
    commercialObjective: 'Demonstrate narrative depth and nuanced emotional resonance in AI cinematography, proving that generative film can evoke real human sentiment beyond superficial spectacle.',
    tools: ['Midjourney v6.1', 'Runway Gen-3 Alpha', 'Kling AI 1.5', 'Premiere Pro', 'Dehancer Pro Film Emulation'],
    colorGrading: 'Kodak Vision3 500T aesthetic with golden hour split-toning and gentle cinematic highlight compression.',
    soundDesignNotes: 'Solo piano chords with decaying cello swells, ambient city murmur, distant marine foghorns, and natural footstep foliage.',
    keyVisualAttributes: ['Golden hour architectural flare', '35mm organic film grain', 'Subtle character motion', 'Emotional dusk palette'],
    sequenceShots: [
      {
        timecode: '00:00 — 00:20',
        shotName: 'Golden Hour Incline',
        cameraMovement: 'Slow walking tracking shot behind protagonist wearing a structured woolen overcoat on an elevated pedestrian walkway.',
        promptGuidance: 'Cinematic wide angle 35mm film still of solitary figure walking towards sunset over modern metropolis bridge, lens flare.',
        lightingAndAtmosphere: 'Warm directional 3200K sunset light piercing between skyscrapers.'
      },
      {
        timecode: '00:21 — 00:50',
        shotName: 'The Glass Pavilion Encounter',
        cameraMovement: 'Medium profile framing with soft rack focus between the character reflection in glass and the shimmering bay.',
        promptGuidance: 'Editorial portrait of contemplative woman gazing at city harbor, double exposure reflection in architectural glass.',
        lightingAndAtmosphere: 'Dusk transitioning to deep indigo, warm interior gallery lighting.'
      },
      {
        timecode: '00:51 — 01:30',
        shotName: 'Twilight Stillness',
        cameraMovement: 'Static locked-off wide cinematic frame as city lights ignite in sync with the evening breeze.',
        promptGuidance: 'Panoramic twilight view of harbor city, street lamps blooming softly, solitary silhouette at railing, 35mm grain.',
        lightingAndAtmosphere: 'Deep twilight sky blue mixed with sodium vapor amber streetlamps.'
      }
    ]
  },
  {
    id: 'aurel',
    slug: 'aurel-time-refined',
    title: 'AUREL',
    tagline: 'TIME, REFINED',
    category: 'PRODUCT ADS',
    categoryLabel: 'Luxury Watch / Horology Commercial',
    year: '2026',
    type: 'High-Horology Commercial',
    client: 'Self-Initiated Concept',
    label: 'SPECULATIVE CAMPAIGN',
    role: 'Macro Director · Horology Visualizer · Motion Designer',
    duration: '0:35',
    aspect: '4:3',
    heroImage: aurelImg,
    featured: false,
    concept: 'A celebration of micro-mechanical perfection. Extreme macro explorations of an open-worked tourbillon escapement, hand-beveled titanium bridges, and anti-reflective sapphire crystal highlights.',
    artDirection: 'Ultra-refined Swiss horology campaign aesthetic. Brushed champagne gold, matte slate ceramic, rhodium-plated gear teeth, and surgical studio lighting with pinpoint focus sweeps.',
    commercialObjective: 'Showcase microscopic precision and high-value tactile luxury for ultra-high-net-worth collector timepieces.',
    tools: ['Midjourney v6.1', 'Runway Gen-3', 'DaVinci Resolve Studio 19', 'Topaz Video AI 5'],
    colorGrading: 'Neutral tungsten base with warm champagne specular pop and deep neutral black shadows.',
    soundDesignNotes: 'High-fidelity mechanical escapement ticking at 28,800 vph, winding ratchet clicks, and resonant metallic chime pulses.',
    keyVisualAttributes: ['Skeletonized gear trains', 'Brushed champagne titanium', 'Curved sapphire reflections', 'Extreme macro depth'],
    sequenceShots: [
      {
        timecode: '00:00 — 00:10',
        shotName: 'The Escapement Heartbeat',
        cameraMovement: 'Sub-millimeter macro rack focus across the silicon balance wheel oscillating back and forth.',
        promptGuidance: 'Extreme macro shot of mechanical watch balance spring pulsing, micro-machined titanium gears, jewel bearings.',
        lightingAndAtmosphere: 'Pinpoint fiber-optic studio spotlights creating razor specular gleams.'
      },
      {
        timecode: '00:11 — 00:22',
        shotName: 'Brushed Case Architecture',
        cameraMovement: 'Linear probe lens sweep along the hand-polished bevels of the 40mm sculptured case.',
        promptGuidance: 'Macro sweep across brushed champagne gold watch bezel, engraved numerals, sapphire crystal edge distortion.',
        lightingAndAtmosphere: 'Soft gradient light bank overhead.'
      },
      {
        timecode: '00:23 — 00:35',
        shotName: 'The Full Dial Elevation',
        cameraMovement: 'Gentle tilt-up to reveal the complete dial face, floating hour markers, and signature Aurel branding.',
        promptGuidance: 'Hero 4:3 studio portrait of luxury chronograph on dark grey slate plinth, clean shadows, museum lighting.',
        lightingAndAtmosphere: 'Even diffused softbox lighting with crisp edge separation.'
      }
    ]
  },
  {
    id: 'forma',
    slug: 'forma-sound-shaped',
    title: 'FORMA',
    tagline: 'SOUND, SHAPED',
    category: 'PRODUCT ADS',
    categoryLabel: 'Consumer Technology / Sculptural Audio',
    year: '2026',
    type: 'Industrial Design Commercial',
    client: 'Self-Initiated Concept',
    label: 'SPECULATIVE CAMPAIGN',
    role: 'Creative Director · 3D AI Visualizer · Sound Designer',
    duration: '0:40',
    aspect: '4:3',
    heroImage: formaImg,
    featured: false,
    concept: 'Treating acoustic hardware as architectural sculpture. The FORMA wireless headphones rest upon raw travertine and limestone blocks, bathed in natural diffused morning light.',
    artDirection: 'Dieter Rams minimalism meets contemporary Scandinavian spatial design. Bead-blasted magnesium alloy, memory foam mesh, honest textures, zero unnecessary ornamentation.',
    commercialObjective: 'Position audio gear as collectible modern art, appealing to discerning industrial designers, audiophiles, and architects.',
    tools: ['Midjourney v6.1', 'Runway Gen-3 Alpha', 'After Effects', 'DaVinci Resolve Studio 19'],
    colorGrading: 'Natural daylight balance with soft paper-white highlights and rich charcoal textures.',
    soundDesignNotes: 'Spatial acoustic air sweeps, ultra-crisp tactile aluminum clicks, and deep immersive sub-frequencies.',
    keyVisualAttributes: ['Bead-blasted magnesium', 'Raw limestone plinth', 'Soft diffused daylight', 'Architectural geometry'],
    sequenceShots: [
      {
        timecode: '00:00 — 00:12',
        shotName: 'Architectural Balance',
        cameraMovement: 'Static wide shot with slow daylight shadow shift across the earcups resting on stone.',
        promptGuidance: 'Minimalist product photography of premium over-ear headphones on travertine block, soft Scandinavian morning sun.',
        lightingAndAtmosphere: 'Large soft diffusion panel imitating window daylight.'
      },
      {
        timecode: '00:13 — 00:26',
        shotName: 'Material Dissection',
        cameraMovement: 'Micro camera rotation around the custom magnetic gimbal hinge and perforated ear cushions.',
        promptGuidance: 'Macro detail of precision machined aluminum headphone pivot mechanism, matte slate finish, tactile texture.',
        lightingAndAtmosphere: 'High-key studio daylight with gentle shadow gradients.'
      },
      {
        timecode: '00:27 — 00:40',
        shotName: 'Sculptural Float',
        cameraMovement: 'Smooth vertical rise as the headphones gently lift off the plinth in zero-gravity slow motion.',
        promptGuidance: 'High-end technology commercial still: headphones levitating above raw stone pedestal, subtle shadow below.',
        lightingAndAtmosphere: 'Clean directional rim light separating product from neutral backdrop.'
      }
    ]
  },
  {
    id: 'origin',
    slug: 'origin-built-from-motion',
    title: 'ORIGIN',
    tagline: 'BUILT FROM MOTION',
    category: 'CINEMATIC',
    categoryLabel: 'Sportswear / Performance Fashion Film',
    year: '2026',
    type: 'High-Energy Brand Commercial',
    client: 'Self-Initiated Concept',
    label: 'SPECULATIVE CAMPAIGN',
    role: 'Action Video Director · Generative Motion Artist · Editor',
    duration: '0:50',
    aspect: '4:3',
    heroImage: originImg,
    featured: false,
    concept: 'A kinetic celebration of human velocity. High-performance technical apparel moving through night rain, stadium floodlights, and gritty urban running tracks.',
    artDirection: 'High-contrast athletic editorial. Deep blacks, saturated stadium beam cuts, fast kinetic camera whips mixed with extreme 240fps slow-motion sweat and fabric flutter.',
    commercialObjective: 'Establish an elite performance brand identity that feels raw, visceral, and uncompromising.',
    tools: ['Kling AI 1.5', 'Runway Gen-3 Alpha', 'Premiere Pro', 'DaVinci Resolve Studio 19'],
    colorGrading: 'Gritty bleach-bypass contrast with punchy technical safety accents and deep ink blacks.',
    soundDesignNotes: 'Heavy rhythmic breathing, explosive foot strike impacts on wet rubber, surging modular synth percussion.',
    keyVisualAttributes: ['Kinetic camera whips', 'Stadium floodlight haze', 'Macro sweat particles', 'Technical aerodynamic fabrics'],
    sequenceShots: [
      {
        timecode: '00:00 — 00:14',
        shotName: 'The Block Start',
        cameraMovement: 'Whip zoom into runner eyes under rain, followed by instant 1000fps slow motion muscle activation.',
        promptGuidance: 'Low angle shot of sprinter in technical running wear exploding from starting blocks, rain mist kicking up from spikes.',
        lightingAndAtmosphere: 'Heavy backlight from towering stadium towers, high haze.'
      },
      {
        timecode: '00:15 — 00:32',
        shotName: 'Fabric in Turbulence',
        cameraMovement: 'Ultra-fast tracking camera locked to athlete torso as wind and water deform the technical fabric surface.',
        promptGuidance: 'Extreme slow motion close up of high-performance waterproof running jacket stretching during movement, sweat droplets.',
        lightingAndAtmosphere: 'Direct hard edge lighting creating maximum texture relief.'
      },
      {
        timecode: '00:33 — 00:50',
        shotName: 'The Urban Ascent',
        cameraMovement: 'Drone chase flying down concrete steps behind runner sprinting through midnight metropolis.',
        promptGuidance: 'Cinematic wide night shot of athlete sprinting up brutalist concrete stairs under neon overpass, steam rising.',
        lightingAndAtmosphere: 'Cold urban ambient light with sudden passing car headlight flares.'
      }
    ]
  },
  {
    id: 'elan',
    slug: 'elan-skin-purest-form',
    title: 'ÉLAN',
    tagline: 'SKIN, IN ITS PUREST FORM',
    category: 'PRODUCT ADS',
    categoryLabel: 'Beauty / Skincare Commercial',
    year: '2026',
    type: 'Clean Beauty Commercial',
    client: 'Self-Initiated Concept',
    label: 'SPECULATIVE CAMPAIGN',
    role: 'Beauty Art Director · AI Fluid Director · Colorist',
    duration: '0:30',
    aspect: '4:3',
    heroImage: elanImg,
    featured: false,
    concept: 'A serene sensory exploration of clean biotechnology skincare. Glass dropper vials, active botanical emulsions, and micro-droplets touching crystalline water pools.',
    artDirection: 'Pristine, organic Scandinavian beauty photography. Soft pearlescent whites, translucent glass refractions, warm dewy skin highlights, and zero plastic artificiality.',
    commercialObjective: 'Drive prestige conversion for clinical-grade clean skincare without relying on cliché beauty tropes.',
    tools: ['Midjourney v6.1', 'Runway Gen-3', 'DaVinci Resolve Studio 19'],
    colorGrading: 'High-key luminous pastel tones with gentle peach skin roll-off and crystal clear water whites.',
    soundDesignNotes: 'Subtle water ripples, gentle breath tones, glass dropper clinks, and soothing organic bells.',
    keyVisualAttributes: ['Frosted glass dropper', 'Micro-droplet ripples', 'Dewy skin luminosity', 'Warm diffused daylight'],
    sequenceShots: [
      {
        timecode: '00:00 — 00:10',
        shotName: 'The Suspended Drop',
        cameraMovement: 'Super macro tracking shot following a single luminous emulsion drop falling toward water surface.',
        promptGuidance: 'Extreme macro shot of milky hydrating serum droplet falling into rippling clear water pool, gentle splash.',
        lightingAndAtmosphere: 'Diffused window light with warm 4500K soft reflectors.'
      },
      {
        timecode: '00:11 — 00:20',
        shotName: 'Glass & Dew',
        cameraMovement: 'Gentle circular arc around the frosted minimalist bottle with condensation bead detailing.',
        promptGuidance: 'Luxury cosmetic bottle of ÉLAN face serum on wet marble slab, soft botanical shadow patterns.',
        lightingAndAtmosphere: 'Backlit through frosted glass for ethereal luminescence.'
      },
      {
        timecode: '00:21 — 00:30',
        shotName: 'Luminous Glow',
        cameraMovement: 'Editorial beauty portrait glide highlighting healthy skin barrier texture and clean typography.',
        promptGuidance: 'Macro beauty portrait of model with radiant dewy skin, gentle smile, natural daylight, Vogue clean beauty look.',
        lightingAndAtmosphere: 'Large wraparound beauty dish with gentle rim backlight.'
      }
    ]
  },
  {
    id: 'synthetic-reality',
    slug: 'synthetic-reality-transcending-space',
    title: 'SYNTHETIC REALITY',
    tagline: 'TRANSCENDING SPACE',
    category: 'EXPERIMENTAL',
    categoryLabel: 'Experimental AI Cinema',
    year: '2026',
    type: 'Avant-Garde Short Film',
    client: 'Self-Initiated Concept',
    label: 'CONCEPT PROJECT',
    role: 'Experimental Film Director · Surrealist Promptist · Sound Composer',
    duration: '1:45',
    aspect: '16:9',
    heroImage: syntheticImg,
    featured: false,
    concept: 'An avant-garde visual poem questioning physical matter. Monolithic architectural chambers melt into liquid mercury mirrors while human silhouettes interact with shifting spatial dimensions.',
    artDirection: 'Surrealist cinema influenced by Andrei Tarkovsky and contemporary digital sculpture. Monochromatic brutalist interiors disrupted by single rays of warm amber light.',
    commercialObjective: 'Showcase visionary conceptual capability and boundary-pushing prompt engineering for museum installations, fashion houses, and film festivals.',
    tools: ['Midjourney v6.1', 'Runway Gen-3 Alpha', 'Kling AI 1.5', 'After Effects', 'Ableton Live 12'],
    colorGrading: 'Stark monochrome palette with selective deep amber light shafts and silver metallic sheen.',
    soundDesignNotes: 'Resonant bronze bell reverberations, modular analog synth drones, and spatial room acoustic IR sweeps.',
    keyVisualAttributes: ['Liquid mercury transformations', 'Brutalist concrete geometry', 'Human scale silhouettes', 'Monochromatic surrealism'],
    sequenceShots: [
      {
        timecode: '00:00 — 00:30',
        shotName: 'The Dissolving Arch',
        cameraMovement: 'Slow mathematical zoom into a monumental archway as the stone texture cascades into chrome liquid.',
        promptGuidance: 'Brutalist concrete cathedral interior, walls melting into liquid mirror pools, human silhouette at center, 70mm film.',
        lightingAndAtmosphere: 'Single overhead skylight beam piercing deep shadows.'
      },
      {
        timecode: '00:31 — 01:10',
        shotName: 'Gravity Inversion',
        cameraMovement: 'Full 180-degree camera rotation along the z-axis as physical debris floats upward toward an infinite sky.',
        promptGuidance: 'Architectural fragments floating weightlessly in space, mirrored reflections, surreal slow motion.',
        lightingAndAtmosphere: 'Cold silver ambient light with warm sun ray slice.'
      },
      {
        timecode: '01:11 — 01:45',
        shotName: 'The Reconstitution',
        cameraMovement: 'Rapid reverse time acceleration as fluid solidifies into an enigmatic geometric monolith.',
        promptGuidance: 'Liquid mercury rushing together to form a polished black sculpture on stone floor, cinematic finale.',
        lightingAndAtmosphere: 'Dramatic stark contrast with pin rim highlights.'
      }
    ]
  },
  {
    id: 'object-01',
    slug: 'object-01-titanium-monolith',
    title: 'OBJECT / 01',
    tagline: 'TITANIUM MONOLITH',
    category: 'PRODUCT ADS',
    categoryLabel: 'Product Visualization / Industrial Design',
    year: '2026',
    type: 'Sculptural Product Film',
    client: 'Self-Initiated Concept',
    label: 'SPECULATIVE CAMPAIGN',
    role: 'Industrial Art Director · Light Modeler · Cinematic Editor',
    duration: '0:35',
    aspect: '4:3',
    heroImage: objectImg,
    featured: false,
    concept: 'Transforming a pure industrial design artifact into a cinematic study of mass, shadow, and materiality. Raking side lighting reveals the subtle micrometer tolerances of machined titanium.',
    artDirection: 'Gallery pedestal minimalism. Monastic quietness, raking low-angle key lighting, long deep shadows, and tactile surface macro sweeps.',
    commercialObjective: 'Demonstrate that AI video can match or exceed traditional high-end 3D CGI product rendering pipelines at a fraction of turnaround time.',
    tools: ['Midjourney v6.1', 'Runway Gen-3', 'DaVinci Resolve Studio 19'],
    colorGrading: 'Film-look monochrome with gentle warm paper tint and zero clipped blacks.',
    soundDesignNotes: 'Deep tactile scraping of stone on stone, heavy magnetic lock clank, and breath-like room silence.',
    keyVisualAttributes: ['Machined titanium bevels', 'Brushed limestone plinth', 'Raking raking shadows', 'Monastic museum framing'],
    sequenceShots: [
      {
        timecode: '00:00 — 00:15',
        shotName: 'Raking Light Emergence',
        cameraMovement: 'Slow horizontal dolly revealing the blade edge of the matte obsidian totem.',
        promptGuidance: 'Sculptural geometric object on limestone plinth, raking low angle studio light casting long dramatic shadow.',
        lightingAndAtmosphere: 'Single 500W studio fixture with barn doors set at 5-degree elevation.'
      },
      {
        timecode: '00:16 — 00:35',
        shotName: 'The Macro Chamfer',
        cameraMovement: 'Extreme macro probe lens tracking along the hand-finished 45-degree chamfered edge.',
        promptGuidance: 'Extreme macro close up of matte black anodized titanium surface, micro grain texture, razor-sharp edge highlight.',
        lightingAndAtmosphere: 'Narrow slit reflector highlight drifting across the surface.'
      }
    ]
  },
  {
    id: 'social-01',
    slug: 'social-01-high-pulse-kinetic',
    title: 'SOCIAL / 01',
    tagline: 'HIGH-PULSE KINETIC',
    category: 'SOCIAL',
    categoryLabel: 'AI UGC / Social Advertisement',
    year: '2026',
    type: 'Vertical Fashion Commercial',
    client: 'Self-Initiated Concept',
    label: 'SPECULATIVE CAMPAIGN',
    role: 'Short-Form Commercial Director · Motion Designer',
    duration: '0:15',
    aspect: '9:16',
    heroImage: socialImg,
    featured: false,
    concept: 'A 9:16 vertical commercial engineered for maximum 3-second hook retention. Kinetic kinetic typography cuts, chrome wearable tech, and instant visual impact for modern digital feeds.',
    artDirection: 'High-energy cyber-editorial. Bold typography, high-velocity match cuts, dynamic speed ramps, and vivid chromatic edge accents.',
    commercialObjective: 'Showcase commercial mastery of short-form vertical formats (TikTok, Instagram Reels, YouTube Shorts) without sacrificing luxury visual standards.',
    tools: ['Kling AI 1.5', 'Midjourney v6.1', 'After Effects', 'Premiere Pro'],
    colorGrading: 'Saturated high-contrast modern digital grade with crisp whites and neon edge pops.',
    soundDesignNotes: 'Sub-bass kick drop at second 0:01, fast glitched riser, and tight punchy electronic percussion.',
    keyVisualAttributes: ['9:16 vertical composition', 'High-speed kinetic match cuts', 'Illuminated chrome eyewear', 'Instant hook pacing'],
    sequenceShots: [
      {
        timecode: '00:00 — 00:03',
        shotName: 'The 1-Second Retention Hook',
        cameraMovement: 'Snap zoom into model donning illuminated chrome eyewear, typography flash on lens reflection.',
        promptGuidance: 'Vertical 9:16 high-fashion commercial shot, cyberpunk model wearing chrome sunglasses, kinetic typography, neon lighting.',
        lightingAndAtmosphere: 'Dual rim lights in magenta and icy cyan with front beauty ring.'
      },
      {
        timecode: '00:04 — 00:15',
        shotName: 'Rhythmic Product Flash',
        cameraMovement: 'Rapid 4-frame speed ramp sequence showcasing 3 colorways with beat-synced glitch transitions.',
        promptGuidance: 'Rapid sequence of futuristic eyewear color variations against seamless studio backdrop, dynamic editorial pose.',
        lightingAndAtmosphere: 'High frequency strobe synced to the music drop.'
      }
    ]
  }
];

export const SERVICES_DATA = [
  {
    id: '01',
    title: 'AI VIDEO CREATION',
    subtitle: 'From Conceptual Prompting to 4K Master Renderings',
    description: 'Bespoke end-to-end generative video production. Utilizing multi-model pipelines (Runway Gen-3, Kling, Midjourney, Luma) to craft realistic cinematic sequences that defy stock footage limitations.',
    deliverables: ['Custom multi-prompt engineering', 'Generative consistency across scenes', 'Camera motion direction & angle control', '4K AI upscaling & neural artifact cleaning'],
    image: noireImg
  },
  {
    id: '02',
    title: 'AI COMMERCIAL & PRODUCT ADS',
    subtitle: 'High-Conversion Visual Campaigns for Luxury & Tech Brands',
    description: 'Commercials engineered with the visual discipline of legacy advertising agencies. Macro product lighting, fluid physics, architectural backgrounds, and intentional brand narrative.',
    deliverables: ['Commercial concept & visual storyboard', 'Sculptural product rendering & simulation', 'Broadcast & digital aspect ratio masters (16:9, 9:16, 4:5)', 'Dynamic pacing & brand logo integration'],
    image: vantaImg
  },
  {
    id: '03',
    title: 'CINEMATIC VIDEO EDITING',
    subtitle: 'Rhythm, Pacing, Match-Cuts & Film-Grade Assembly',
    description: 'Transforming disparate generative clips into a cohesive, breathing cinematic experience. Precise editorial pacing, seamless speed ramping, and invisible motion match-cuts.',
    deliverables: ['DaVinci Resolve & Premiere Pro editorial', 'Sound design & atmospheric Foley mix', 'Bespoke optical transitions', 'Rhythm-matched musical scoring'],
    image: afterlightImg
  },
  {
    id: '04',
    title: 'AI PRODUCT VISUALIZATION',
    subtitle: 'Replacing Complex 3D Studio Pipelines with Speed & Artistry',
    description: 'Visualizing physical products in impossible, architectural, or photorealistic studio environments without multi-month 3D modeling cycles.',
    deliverables: ['Material fidelity (brushed titanium, obsidian glass, leather)', 'Precision studio lighting setups', 'Exploded or macro detail sequences', 'Turnaround time measured in days, not weeks'],
    image: aurelImg
  },
  {
    id: '05',
    title: 'AI UGC & SOCIAL ADS',
    subtitle: 'Scroll-Stopping Vertical Campaigns Built for Retention',
    description: 'Fast, high-velocity short-form content specifically tailored for Instagram Reels, TikTok, and YouTube Shorts with sub-3-second retention hooks.',
    deliverables: ['First-second hook development', 'Vertical-first 9:16 framing', 'Kinetic typography & caption design', 'Rapid A/B creative variants'],
    image: socialImg
  },
  {
    id: '06',
    title: 'CREATIVE DIRECTION',
    subtitle: 'Articulating Brand Worlds & Unconventional Visual Identities',
    description: 'Developing the complete aesthetic thesis of your campaign before touching a single generator. Color palettes, cinematic reference decks, tone guidelines, and narrative arcs.',
    deliverables: ['Comprehensive visual treatment deck', 'Model & environment art direction', 'Lighting & cinematographic language', 'Brand worldbuilding document'],
    image: syntheticImg
  },
  {
    id: '07',
    title: 'SHORT-FORM VIDEO CONTENT',
    subtitle: 'Episodic Micro-Reels & Serialized Brand Storytelling',
    description: 'Serial creative content that builds an engaged audience. Cinematic teasers, product drops, behind-the-scenes simulations, and aesthetic mood reels.',
    deliverables: ['Content batching & calendar planning', 'Cross-platform optimization', 'Consistent visual grading & sound ID', 'High-tempo delivery workflow'],
    image: originImg
  },
  {
    id: '08',
    title: 'BRAND & PRODUCT STORYTELLING',
    subtitle: 'Evoking Emotion & Desire Beyond Feature Checklists',
    description: 'Brand films that establish philosophical stature. Moving past generic product specs to craft stories about human emotion, craft, and vision.',
    deliverables: ['Narrative scriptwriting & voiceover prompt design', 'Human-centered cinematic framing', 'Emotive 35mm film color grading', 'Archive-quality director cuts'],
    image: formaImg
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'CONCEPT & THESIS',
    timeline: 'DAY 01 — 02',
    tagline: 'Ideas start as words. We find the singular commercial truth.',
    description: 'We establish the campaign thesis, audience psychology, and commercial objective. No generic prompts. We build a comprehensive Creative Treatment defining camera package, lighting ratios, lens millimeter references, and narrative pacing.',
    artifacts: ['Creative Treatment Document', 'Cinematographic Moodboard', 'Shot List & Pacing Grid']
  },
  {
    number: '02',
    title: 'VISUAL DIRECTION & LORAS',
    timeline: 'DAY 03 — 05',
    tagline: 'Sculpting the visual DNA and brand consistency.',
    description: 'Before motion generation, we establish keyframe lighting, material textures, and character consistency through curated seed libraries and proprietary prompt syntaxes. Every shadow and reflection is intentional.',
    artifacts: ['Keyframe Reference Deck', 'Material Benchmark Sheets', 'Approved Color Palette (LUTs)']
  },
  {
    number: '03',
    title: 'AI GENERATION & CAMERA RIGGING',
    timeline: 'DAY 06 — 08',
    tagline: 'Directing the generative camera with mathematical rigor.',
    description: 'Generating high-retention motion using advanced camera controls across Runway Gen-3 Alpha, Kling AI, and Luma. We eliminate uncanny artifacts through strict parameter damping, multi-pass generation, and neural inpainting.',
    artifacts: ['Raw Motion Passes (24fps / 60fps)', 'Inpainted Neural Cleanups', 'Motion Vector Polish']
  },
  {
    number: '04',
    title: 'EDITING, COLOR & SOUND',
    timeline: 'DAY 09 — 11',
    tagline: 'The film is truly made in the editing suite.',
    description: 'This is where AI visuals become cinema. Precision cuts in DaVinci Resolve Studio, optical motion-blur injection, custom film print stock emulation (Kodak 2383 / 5207), and multi-layered spatial audio design.',
    artifacts: ['Rough Cut Assembly', 'Custom Film-Grain & LUT Pass', 'Stem-Separated Sound Design Track']
  },
  {
    number: '05',
    title: 'FINAL DELIVERY & MASTERING',
    timeline: 'DAY 12',
    tagline: 'Pristine 4K assets formatted for every global screen.',
    description: 'Ultra-resolution neural upscaling to 4K ProRes 422 HQ, noise-reduction optimization, and delivery across horizontal widescreen (16:9), cinematic square (4:5 / 1:1), and vertical mobile (9:16) formats.',
    artifacts: ['4K ProRes 422 HQ Masters', 'Web-Optimized H.265 / MP4 Deliveries', 'Full Campaign Cutdown Suite']
  }
];

export const TESTIMONIALS = [
  {
    quote: "The final visual looked nothing like a typical AI-generated video. The camera movement, controlled lighting, and editorial pacing felt identical to a high-end European production house.",
    author: "Marcella Vance",
    role: "Global Creative Director",
    company: "Vance & Holt Brand Studio",
    projectFocus: "Luxury Fragrance Commercial"
  },
  {
    quote: "Working with this creator shifted our entire perspective on generative cinema. They don't just prompt—they direct with a cinematographer's eye and an editor's discipline.",
    author: "Julian Thorne",
    role: "Head of Brand Experience",
    company: "Kinesis Automotive Media",
    projectFocus: "Automotive Speculative Reel"
  },
  {
    quote: "Turnaround that would normally take six weeks of complex 3D CGI and studio lighting was delivered in eight days—with superior artistic warmth and textural depth.",
    author: "Elena Rostova",
    role: "Senior Art Director",
    company: "Aura Industrial Objects",
    projectFocus: "Sculptural Tech Visualization"
  }
];
