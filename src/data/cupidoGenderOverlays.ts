// Gender-specific text overlays for CupidYou results
// Overrides: name, tagline, intro, desc, rel per gender

export interface GenderOverlay {
  name: string;
  tagline: string;
  intro: string;
  desc: string;
  rel: string;
}

export const CUPIDO_GENDER_OVERLAYS: Record<string, Record<string, GenderOverlay>> = {
  P: {
    donna: {
      name: 'The Authentic Flame',
      tagline: 'Loves with her whole body. Opens up with courage. Transforms vulnerability into magnetism.',
      intro: `Your heart operates in <strong>fully open</strong> mode. You love with a depth that scares most men — and attracts the right ones like a flame in the night. Your vulnerability isn't weakness: in a world of masks, it's your rarest superpower.`,
      desc: `You've been told "you're too much" at least once. Too intense, too emotional, too honest. But the problem isn't you — it's that you opened your heart to someone who wasn't ready to hold it.<br><br>Your pattern: you fall in love with your whole body, show who you really are, and when the other person isn't at your level — the pain is devastating. Not because you're fragile, but because you love with a power few know.<br><br>The Flame woman doesn't need to dim herself. She needs to learn to <strong>dose the light</strong> — opening up gradually, with the right men, at the right pace. Not everyone deserves your fire on the first date.`,
      rel: `Your ideal relationship model is <strong>vulnerability as a choice, not a reaction</strong>. The right man for you isn't the one who "accepts you as you are" — he's the one strong enough to stand before your fire without burning and without trying to extinguish you.`
    },
    uomo: {
      name: 'The Authentic Fire',
      tagline: 'Loves with everything. Shows up with courage. Transforms vulnerability into magnetic strength.',
      intro: `Your heart operates in <strong>fully open</strong> mode — and in the masculine world, this is rarer than you think. Where other men hide behind cynicism or detachment, you love with a depth few reach.`,
      desc: `You've been taught that a man doesn't expose himself. That vulnerability is weakness. But you know that's not true — and every time you open up, you create connections others can only envy.<br><br>Your pattern: you fall in love with all of yourself, show your cards, and when the other person isn't ready — the pain is amplified. Not because you're "too sensitive," but because you love at a level most don't reach.<br><br>The Fire man doesn't need to armor up. He needs to learn to <strong>dose his openness</strong> — showing depth gradually, with the right people. Not everyone deserves your intensity at the first meeting.`,
      rel: `Your ideal relationship model is <strong>vulnerability as strength, not exposure</strong>. The right woman for you isn't the one who asks you to be "stronger" — she's the one who recognizes that your emotional openness is the highest form of masculine strength.`
    }
  },
  I: {
    donna: {
      name: 'The Free Breeze',
      tagline: 'Loves without losing herself. Protects her essence. Transforms independence into a gift.',
      intro: `Your heart needs <strong>air to breathe</strong>. You love deeply but not at the cost of the woman you've become. Your independence isn't coldness — it's embodied wisdom.`,
      desc: `In a world that teaches women that loving means dissolving into the other, you've chosen a different path. You know who you are. You know what you want. And you're not willing to lose yourself for anyone.<br><br>The problem? The world calls it "coldness." Men interpret it as "you don't care." But you know <strong>it's the opposite</strong>: it's precisely because you care that you protect your space.<br><br>Your pattern: you get close, feel the connection, then feel your identity threatened and retreat. The other person experiences rejection. You experience survival.<br><br>The Breeze woman doesn't need to give up her space. She needs to discover that <strong>true intimacy doesn't erase who you are — it amplifies it</strong>. The highest independence is choosing to stay.`,
      rel: `Your ideal relationship model is a <strong>partnership between two complete people</strong>. You don't seek someone to complete you — you seek someone secure enough not to feel threatened by your freedom. And present enough to make you feel that staying is beautiful, not a cage.`
    },
    uomo: {
      name: 'The Free Wind',
      tagline: 'Loves without chains. Protects his center. Transforms space into respect.',
      intro: `Your heart needs <strong>space to exist</strong>. You love deeply but have a non-negotiable need for autonomy. Your independence isn't immaturity — it's how you stay whole.`,
      desc: `You've been told you're "emotionally unavailable." That you're afraid of commitment. But the truth is different: you're not afraid of love. <strong>You're afraid of losing yourself inside love.</strong><br><br>Your pattern: you get close, the connection grows, then you feel the walls closing in. You need air. The other person experiences abandonment. You experience an escape for survival.<br><br>The Wind man doesn't need to give up his space — that's sacred. He needs to learn that <strong>staying isn't a prison</strong>. That you can be completely yourself inside a relationship, if you choose the right person and learn to communicate your need for air without disappearing.`,
      rel: `Your ideal relationship model is a <strong>partnership where space is respect, not distance</strong>. The right woman for you isn't the one who chases you when you vanish — she's the one with her own full life, who gives you air naturally, and makes you want to stay because being with her is freedom, not a cage.`
    }
  },
  F: {
    donna: {
      name: 'The Protective Root',
      tagline: 'Loves by building. Takes care of everything. Transforms dedication into foundations.',
      intro: `Your heart expresses itself through <strong>hands and actions</strong>. For you, loving is doing — cooking, organizing, remembering, anticipating needs. In a world that undervalues care, you transform it into art.`,
      desc: `You're the one who holds everything together. The relationship, the home, the other person's emotions, the schedule, birthdays, little attentions. <strong>But who takes care of you?</strong><br><br>Your pattern: give everything without asking → the other person gets used to it → you accumulate frustration in silence → you explode or shut down. And when you finally ask for something for yourself, you feel guilty — as if you didn't have the right.<br><br>The Root woman doesn't need to stop giving — her care is a real superpower. She needs to learn to <strong>receive with the same grace</strong> she gives. And to understand that "I need" isn't weakness — it's honesty.`,
      rel: `Your ideal relationship model is a <strong>partnership where care flows in both directions</strong>. The right man for you isn't the one who "lets you do" — he's the one who notices what you do, recognizes it, and reciprocates without you having to ask.`
    },
    uomo: {
      name: 'The Solid Root',
      tagline: 'Loves by protecting. Builds for two. Transforms solidity into a love language.',
      intro: `Your heart expresses itself through <strong>concrete actions</strong>. For you, loving is building — solving problems, creating security, protecting, being present in deeds. Not in words: in deeds.`,
      desc: `You're the pillar. The one who solves, organizes, holds everything up. The problem? <strong>No one ever asks how you're doing.</strong> Because you always seem strong.<br><br>Your pattern: you take charge of everything → the other person leans on you → you never ask for anything → you accumulate emotional fatigue → you shut down or withdraw. And when you finally need something, you don't even know how to ask — because you've always been the one who gives.<br><br>The Root man doesn't need to stop protecting — it's his most powerful love language. He needs to learn that <strong>even rock needs water</strong>. That asking for help isn't weakness — it's maturity.`,
      rel: `Your ideal relationship model is a <strong>partnership where strength isn't an obligation but a choice</strong>. The right woman for you isn't the one who puts you on a pedestal — she's the one who sees behind the armor, asks how you really are, and lets you be vulnerable without judging you.`
    }
  },
  L: {
    donna: {
      name: 'The Thinking Star',
      tagline: 'Loves with the mind. Seeks intellectual depth. Transforms thought into intimacy.',
      intro: `Your heart flows through the <strong>mind</strong>. For you, true seduction is a conversation that touches the soul. In a world that reduces attraction to aesthetics, you seek depth — and that makes you rare.`,
      desc: `You've been told "you're too complicated." That you think too much. That you should "just let go." But the point is that <strong>your mind is your most powerful love organ</strong> — and you have no intention of turning it off for anyone.<br><br>Your problem isn't that you think too much. It's that the other person often wants to feel, not understand. They want a spontaneous kiss, not an analysis of why you work well together.<br><br>The Star woman doesn't need to come down from her tower of intellect. She needs to learn to <strong>open a door to the ground floor</strong> — letting emotions arrive before analysis, at least sometimes. The mind and heart aren't in competition.`,
      rel: `Your ideal relationship model is a <strong>connection where mind and body speak together</strong>. The right man for you isn't the one who asks you to "think less" — he's the one intelligent enough to stimulate you and emotional enough to pull you out of your head.`
    },
    uomo: {
      name: 'The Deep Mind',
      tagline: 'Loves with the intellect. Seeks real connection. Transforms thought into an emotional bridge.',
      intro: `Your heart flows through the <strong>mind</strong>. For you, true attraction comes from a conversation that surprises you. Intellect is your love language — and it's no less deep than the emotional one.`,
      desc: `You've been told you're "distant." That you don't show emotions. But the truth is that <strong>you process them differently</strong> — through thought, analysis, deep understanding.<br><br>Your pattern: you fall in love with the other person's mind before their body. You analyze compatibility. You build a mental model of the relationship. The problem? The other person wants to feel loved, not understood. They want a spontaneous "I miss you," not an analysis of why relationships work.<br><br>The Star man doesn't need to stop thinking — intellect is his most powerful gift. He needs to learn to <strong>let the body speak before the mind</strong> — at least sometimes. A hug is worth more than a thousand analyses.`,
      rel: `Your ideal relationship model is an <strong>intellectual-emotional partnership</strong>. The right woman for you isn't the one who asks you to "be more romantic" — she's the one who stimulates you to think and teaches you to feel. Two things that can coexist.`
    }
  },
  S: {
    donna: {
      name: 'The Intense Wave',
      tagline: 'Loves with urgency. Feels everything amplified. Transforms fear into magnetic depth.',
      intro: `Your heart lives at <strong>maximum volume</strong>. When you love, you love with an intensity that ignites everything around you. Your fear of abandonment isn't a flaw — it's a signal of how deeply you connect.`,
      desc: `You've been called "too much." Too intense. Too needy. Too. But <strong>the problem isn't that you feel too much — it's that you've loved people who feel too little.</strong><br><br>Your pattern: you fall in love intensely → the fear of it ending takes hold → you seek reassurance → the other person feels suffocated → they pull away → your fear is confirmed. And the cycle starts again with the next one.<br><br>The Wave woman doesn't need to love less. She needs to build <strong>a home inside herself</strong> — so that the other person's love is a beautiful gift, not her only source of security. When you're full inside, your intensity becomes magnetism — not pressure.`,
      rel: `Your ideal relationship model is a <strong>love that makes you feel secure without making you dependent</strong>. The right man for you isn't the one who calms you with words — he's the one who gives you security through consistency, constant presence, and actions that never leave you doubting.`
    },
    uomo: {
      name: 'The Deep Wave',
      tagline: 'Loves with urgency. Feels everything amplified. Transforms intensity into total presence.',
      intro: `Your heart lives at <strong>maximum volume</strong> — and in the masculine world, this is uncomfortable territory. Where other men hide in indifference, you feel everything. Love for you isn't a concept — it's a physical, total, urgent experience.`,
      desc: `No one teaches you how to manage this intensity as a man. You've been told to "control yourself," to "not be jealous," to "give her space." But the point is that <strong>you're not controlling — you're suffering</strong>.<br><br>Your pattern: you fall in love with urgency → the fear of it ending grips you → you seek reassurance, check, cling → the other person feels suffocated → they pull away → you get confirmation that everyone leaves. And the cycle repeats.<br><br>The Wave man doesn't need to turn off the intensity — it's his rarest gift. He needs to build <strong>inner security</strong> — a center that doesn't collapse when the other person doesn't reply to a message. True strength isn't not feeling. It's feeling everything and staying standing.`,
      rel: `Your ideal relationship model is a <strong>love where your presence is a gift, not a demand</strong>. The right woman for you isn't the one who reassures you at every doubt — she's the one stable enough not to waver when your intensity arrives, and present enough to make you feel secure without having to ask.`
    }
  }
};
