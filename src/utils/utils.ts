export function formatReputation(num: number): string {
    let formattedNum = parseFloat(num.toFixed(2));
    let suffix = '';
  
    if (num >= 1000000) {
      formattedNum /= 1000000;
      suffix = 'M';
    } else if (num >= 1000) {
      formattedNum /= 1000;
      suffix = 'K';
    }
  
    return formattedNum.toFixed(2) + suffix;
  }