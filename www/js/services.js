angular.module('worrycure.services', [])

.factory('WorryCureService', function() {

  var questions = [
  {
    id: 'start',
    header: 'Trinn 1',
    text: 'Har du en bekymring?',
    buttons: [
      { text: 'Ja', link: 'future-or-now' },
      { text: 'Nei', link: 'put-away' }]
  },
  {
    id: 'future-or-now',
    header: 'Trinn 2',
    text: 'Omhandler bekymringen din en tanke om en mulig fremtidig hendelse som du er redd for, eller omhandler tanken et ekte problem du opplever nå?',
    buttons: [
      { text: 'En mulig fremtidig hendelse', link: 'now-or-later' },
      { text: 'Et ekte problem som skjer nå', link: 'time-now' }]
  },
  {
    id: 'now-or-later',
    header: 'Trinn 3',
    text: 'Ønsker du å gå inn i din bekymring på nåværende tidspunkt?',
    buttons: [
      { text: 'Ja', link: 'challenge' },
      { text: 'Nei', link: 'later-or-never' }]
  },
  {
    id: 'later-or-never',
    header: 'Trinn 4',
    text: 'Ønsker du å gå inn i din bekymring på et senere tidspunkt?',
    buttons: [
      { text: 'Ja', link: 'note-for-later' },
      { text: 'Nei', link: 'let-go' }]
  },
  {
    id: 'time-now',
    header: 'Trinn 3',
    text: 'Har du tid og overskudd til å løse problemet på nåværende tidspunkt?',
    buttons: [
      { text: 'Ja', link: 'problem-solving' },
      { text: 'Nei', link: 'note-in-calendar' }]
  },
  {
    id: 'put-away',
    header: 'Trinn 2',
    text: 'Vel, da er det bare å legge bort denne appen, og heller vende tilbake når en bekymring dukker opp.'
  },
  {
    id: 'challenge',
    header: 'Trinn 4',
    text: 'Utfordre din bekymring. Benytt gjerne en bekymringsutfordringsdagbok.',
    strategies: [{ link: 'utfordre', text: 'Utfordre din bekymring' }]
  },
  {
    id: 'note-for-later',
    header: 'Trinn 5',
    text: 'Bruk strategien bekymringsutsettelse. Noter bekymringen, og ta den frem på et tidspunkt som er avsatt til å bruke på bekymringer.',
    strategies: [{ link: 'utsettelse', text: 'Bekymringsutsettelse' }]
  },
  {
    id: 'let-go',
    header: 'Trinn 5',
    text: 'Gi slipp på bekymringen',
    strategies: [{ link: 'gi-slipp', text: 'Gi slipp på bekymringen' }]
  },
  {
    id: 'problem-solving',
    header: 'Trinn 4',
    text: 'Bruk strategien Effektiv problemløsning',
    strategies: [{ link: 'problemloesning', text: 'Effektiv problemløsning' }]
  },
  {
    id: 'note-in-calendar',
    header: 'Trinn 4',
    text: 'Sett av tid i din kalender en gang i nærmeste fremtid til å løse dette problemet med Effektiv problemløsning',
    strategies: [
      { link: 'utsettelse', text: 'Bekymringsutsettelse'}, 
      { link: 'problemloesning', text: 'Effektiv problemløsning'}]
  }];
  
  return {
    get: function(questionId) {
      for (var i = 0; i < questions.length; i++) {
        if (questions[i].id === questionId) {
          return questions[i];
        }
      }
      return null;
    }
  }
});
